
import { initContent } from "../../main";
import "./Ppt.css";

const template = () => `
<section class="contact">
<h2>Piedra papel o tijera</h2>
<div class="homebutton">
    <button>🏠</button>
</div>
<div id="resultado"></div>
  <div class="jugador1">
    <h3 class="player">Jugador 1</h3>
      <button class="piedra1">👊</button></button>
      <button class="papel1">🤚🏾</button>
      <button class="tijera1">✌🏻</button>
    </div>
    <div class="jugador2">
      <h3 class="player2">Jugador 2</h3>
      <button class="piedra2">👊🏻</button>
      <button class="papel2">🤚🏽</button>
      <button class="tijera2">✌🏿</button>
  </div>
  
</section>
`;


//funcion para cada boton

//almacenar el resultado 

//jugador 1
let jugador1 = 0;
//jugador 2
let jugador2 = 0;

//----JUGADOR1
const funcionBoton = () => {
  const boton = document.querySelector(".piedra1");
  boton.addEventListener("click", () => {
    jugador1 = 1
    console.log(jugador1);
    comparacion();
  })
}

const funcionBotonPapel = () => {
  const boton = document.querySelector(".papel1");
  boton.addEventListener("click", () => {
    jugador1 = 2
    console.log(jugador1);
    comparacion();
  })

}

const funcionBotonTijera = () => {
  const boton = document.querySelector(".tijera1");
  boton.addEventListener("click", () => {
    jugador1 = 3
    console.log(jugador1);
    comparacion();
  })
}
//----jugador 2 
const funcionBotonPiedra2 = () => {
  const boton = document.querySelector(".piedra2");
  boton.addEventListener("click", () => {
    jugador2 = 1
    console.log(jugador2);
    comparacion();
  })
}


const funcionBotonPapel2 = () => {
  const boton = document.querySelector(".papel2");
  boton.addEventListener("click", () => {
    jugador2 = 2
    console.log(jugador2);
    comparacion();
  })
}

const funcionBotonTijera2 = () => {
  const boton = document.querySelector(".tijera2");
  boton.addEventListener("click", () => {
    jugador2 = 3
    console.log(jugador2);
    comparacion();
  })
}

let resultado;
const comparacion = () => {
  console.log("entro");
  if (jugador1 == 1 && jugador2 == 1 || jugador1 == 2 && jugador2 == 2 || jugador1 == 3 && jugador2 == 3){
   document.querySelector("#resultado").innerHTML = `<p>Ups, parece que es un empate!</p>`;
  }if  (jugador1 == 1 && jugador2 == 3 || jugador1 == 2 && jugador2 == 1 || jugador1 == 3 && jugador2 == 2){
    document.querySelector("#resultado").innerHTML = `<p>Ha ganado Jugador 1!!</p>`;
  }if (jugador2 == 1 && jugador1 == 3 || jugador2 == 2 && jugador1 == 1 || jugador2 == 3 && jugador1 == 2){
    document.querySelector("#resultado").innerHTML = `<p>Ha ganado Jugador 2!!</p>`;
  }
  //todas las opciones para empatar, para que gane un jugador o gane el otro.
} 
export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  document.querySelector(".homebutton").addEventListener("click", () => {
    initContent("Home");
  })
  funcionBoton()
  funcionBotonPapel()
  funcionBotonTijera()
  funcionBotonPiedra2()
  funcionBotonPapel2()
  funcionBotonTijera2()
};
