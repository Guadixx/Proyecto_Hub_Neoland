

import "./Hangman.css";

const template = () => `
<section class="other">
    <h2>Other</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};

// //cosas que necesito para un ahorcado

// //variable del alfabeto 
// const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// //palabra a adivinar
// let word = "Agua"

// //voy a crear una ul del alfabeto 
// const buttons = () => {
//   const letterBtns = document.createElement('button');
//   const divBtns = document.createElement('div');
//   divBtns.appendChild(letterBtns);
//   const letters = document.createElement('ul');

//   for(var i = 0; i < alfabeto.lenght; i++){
//     letters.id = "letter";
//     const list = document.createElement('li')
//     list.innerHTML = alphabet[i];
//     letterBtns.appendChild(letters);
//     letterBtns.appendChild(list);
//   }
// }

// //los botones con cada letra están creados, ahora hace falta crear la funcion para jugar 
// const play = () => {
//     console.log("_" * word.length)
//   }

// play();

