import "./Login.css";
const template = () => `
<section class="home">
    <h2>Login</h2>
    <div id="subtitulo">
        <div class="block">
        <h3>Hub-Games</h3>
        </div>
    </div>
    <div class="inputNombre">
        <p>Introduce tu nombre</p>
        <input class="name" type="text" placeholder="Ingresa tu nombre">
        <button id="storage">go</button>
    </div>
    <div>
    <p> Bienvenido a mi sección de juegos.Puedes encontrar distintos juegos a los cuales puedes acceder desde el header. </p>
    </div>
    </section>`;

export const printTemplate = () => {
    const container = document.querySelector("#app");
    container.innerHTML = template();
    const storageBtn = document.querySelector("#storage");
    const nameInput = document.querySelector(".name");
    storageBtn.addEventListener("click", () => {
    localStorage.setItem("user", nameInput.value);
  });
  const localUser = localStorage.getItem("user");

//   container.innerHTML = localStorage.getItem("user")
//     ? `
//   <h2>${localUser}</h2>
//   `
//     : `No hay usuario`;
};

//----LOCAL STORAGE PARA EL NOMBRE
// const storageBtn = document.querySelector("#storage");
// const nameInput = document.querySelector(".name");
// const container = document.querySelector("#app");

// storageBtn.addEventListener("click", () => {
//      localStorage.setItem("user", nameInput.value);
//  })
// const localUser = localStorage.getItem("user");

//   container.innerHTML = localStorage.getItem("user")
//   ?`
//   <h2>${localUser}</h2>
//   `
//   : `No hay usuario`;

// console.log(localStorage.user);
