import "./Home.css";
const template = () => `
<section class="home">
    <h2>Home</h2>
    <div id="subtitulo">
        <div class="block">
        <h3>Hub-Games</h3>
        </div>
    </div>
    <div class="inputNombre">
        <p>Introduce tu nombre</p>
        <input class="name" type="text" placeholder="Ingresa tu nombre">
        <button id="storage">></button>
    </div>
    </section>`;

export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
};
