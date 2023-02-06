

import "./Api.css";
import axios from "axios";
import { initContent } from "../../main";


//ORGANIZACIÓN. CONTAINER ---> TIENE LAS CARTAS 
//CLASS BUTTONS ---> TIENE LOS BOTONES 
let allPokemons;
//-----TEMPLATE
const template = () => `
<section class="api">
    <div class="input">
      <input id="searchInput" type="text" placeholder="ejemplo: Pikachu.." />
    </div>
    <div class="homebutton">
    <button>🏠</button>
    </div>
    <div class="spinner">
      <img src="https://res.cloudinary.com/dpidlverd/image/upload/v1675672700/replica/188918_fvlogm.png" alt="pokemon-spinner">
    </div>
    <div class="buttons"></div>
    <div id="container"></div>
</section>
`;
//----RECUPERANDO LA API, EMPUJO LOS POKEMONS AL POKEARRAY
const buclePokemon = async () => {
  let pokeArray = [];
  for (let i = 1; i <= 150; i++){
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  const data = await res.json();
  pokeArray.push(data);
};
mapPokemons(pokeArray);
}
//MAPEO AL POKEARRAY Y LOS METO EN ALLPOKEMONS 
const mapPokemons = (pokemons) => {
    allPokemons = pokemons.map((pokemon) => ({
     name: pokemon.name,
     experience: pokemon.base_experience,
     element: pokemon.types[0].type.name,
     weight: pokemon.weight,
     img: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
   }));
   printPokemons(allPokemons);
 };
//---IMPRIMIR LAS CARTAS, SE EMPRIME EL ALLPOKEMONS PORQUE AHÍ TENGO LOS 150 POKEMONS
//MIS CARTAS ESTAN TODAS EN EL DIV CONTAINER 
 const printPokemons = (pokemons) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (const pokemon of pokemons){
    const figure = document.createElement('figure');
    figure.innerHTML = `
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.experience}xp</h3>
    <h3>${pokemon.element}</h3>
    <h3>${pokemon.weight}kg</h3>
    <img src=${pokemon.img} alt=${pokemon.name}/>
    `;
    container.appendChild(figure);
    figure.classList.add('carta');
  }
 }
//EXPORTAR EL TEMPLATE AL APP-----------------------------------------------------------------------------------------------------------
export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  document.querySelector(".homebutton").addEventListener("click", () => {
    initContent("Home");
  })
  buclePokemon();
  btnCreator();
  filterBuscador();
};


//ahora vamos a hacer los botones de clasificación de los pokemons.
//Primero voy a importar el axios 
//---CREADOR DE BOTONES----------------------------------------------------------------------------------------------------------------------
export const btnCreator = () => {
  const btns = document.querySelector(".buttons");
  for (const tipo of tiposPokemon){
      const buttons = document.createElement('button');
      const text = document.createTextNode(`${tipo}`);
      buttons.appendChild(text);
      buttons.classList.add(`${tipo}-type`);
      btns.appendChild(buttons);
      buttons.addEventListener("click", () => {
        filteredPokemons(allPokemons, tipo);
      }) 
  }
}

//evento al input o al boton, hacer el mismo el filtro, es coger el Allpokemons hacerle un filtro que cuando pokemon.name incluya el valor del item item.target.value lo mismo con el input o con el boton lo mismo pero haciendolo con el evento de los botones 
//al input el evento es tipo input 


//---FILTRO DE LOS BOTONES------
const filteredPokemons = (array, type) => {
    const filtered = array.filter((el) => el.element === type);
    printPokemons(filtered);
};

//----ARRAY CON LOS TIPOS DE POKEMONS
let tiposPokemon = ["bug","dragon","dark","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"];


//-----------------------------------------------------------------------------------------------------------------------------

//-----FILTRO CON EL INPUT-----
 const filterInput = (pokemon) => {
   const filtered = pokemon?.filter((pokemon)=> pokemon.name.toLowerCase().includes(searchInput.value.toLowerCase())
   );
   printPokemons(filtered);
 };

//EVENTO AL INPUT DONDE LE METO EL FILTER
const filterBuscador = () => {
  const pokeInput = document.querySelector("#searchInput");
  console.log(searchInput.value);
  pokeInput.addEventListener("input", () => {
    filterInput(allPokemons);
  })
};
