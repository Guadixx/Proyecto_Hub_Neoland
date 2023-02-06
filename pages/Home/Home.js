import { initContent } from "../../main";
import "./home.css"

const template = () => `
<div class="block2">
        <h2 id="color-name">color</h2>
    <select id="color-picker">
          <option value="@fff">-</option>
    </select>
 </div>
<div class="grid-menu">
    <ul>
        <li>
            <button class="juego1">Api pokemon</button>
        </li>
        <li>
            <button class="juego2">Piedra Papel o Tijera</button>
        </li>
    </ul>
    </div>

`;



export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    document.querySelector(".juego1").addEventListener("click", () =>{
        initContent("Pokemon_Api");
    })
    document.querySelector(".juego2").addEventListener("click", () => { 
        initContent("Piedra_Papel_o_Tijera");
    })
    // document.querySelector(".juego3").addEventListener("click", () => {
    //     initContent("Quiz");
    // })
};