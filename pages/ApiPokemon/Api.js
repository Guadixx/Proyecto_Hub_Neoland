

import "./Api.css";

const template = () => `
<section class="api">
    <h2>Pokemon Api</h2>
</section>
`;

let pokeArray = []
const buclePokemon = async () => {
  for (let i = 1; i <= 150; i++){
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  const data = await res.json();
  pokeArray.push(data);
};
mapPokemons(pokeArray);
}

const mapPokemons = (pokemons) => {
   const allPokemons = pokemons.map((pokemon) => ({
     name: pokemon.name,
     experience: pokemon.base_experience,
     element: pokemon.types[0].type.name,
     weight: pokemon.weight,
     img: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default
   }));
   printPokemons(allPokemons);
   console.log(allPokemons);
 };

 const printPokemons = (pokemons) => {
  const container = document.querySelector("#app");
  container.innerHTML = "";
  for (const pokemon of pokemons){
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.experience}</h3>
    <h3>${pokemon.element}</h3>
    <h3>${pokemon.weight}</h3>
    <img src=${pokemon.img} alt=${pokemon.name}/>
    `;
    container.appendChild(div);
    div.classList.add('carta');
  }
 }

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  buclePokemon()
};

