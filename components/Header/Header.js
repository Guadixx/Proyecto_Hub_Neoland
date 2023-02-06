import { initContent } from "../../main";
import "./Header.css";

const template = () => `
<nav>
    <ul>
    
    </ul>
</nav>
<div class="block2">
        <h2 id="color-name">color</h2>
        <select id="color-picker">
          <option value="@fff">-</option>
        </select>
      </div>
`;
//Aca estoy creando los botones y conectandolos con el initContent del Main
// const addListeners = () => {
//     document.querySelector("#homelink")
//     .addEventListener ("click", () => initContent("Home"));
//     document.querySelector("#apilink")
//     .addEventListener("click", () => initContent("Pokemon Api"));
//     document.querySelector("#otherlink")
//     .addEventListener("click", () => initContent("Others"));
//     document.querySelector("#contactlink")
//     .addEventListener("click", () => initContent("Contact Me"));
// }
//vamos a meter todo esto en una función, guada acordate de esto y tené cuidado

export const printTemplate = () => {
    document.querySelector("header").innerHTML = template();
    // addListeners();
};