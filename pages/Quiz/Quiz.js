

import "./Quiz.css";
import { initContent } from "../../main";

const diceNumber = ["https://res.cloudinary.com/dpidlverd/image/upload/v1675753752/replica/b7vzbhu4c7ukhrp1ulcq.png", "https://res.cloudinary.com/dpidlverd/image/upload/v1675753773/replica/s0lk9gphvpqa8fywdiqx.png", "https://res.cloudinary.com/dpidlverd/image/upload/v1675753783/replica/qn93njqqm8tiurmmtnzw.png", "https://res.cloudinary.com/dpidlverd/image/upload/v1675753792/replica/qnryka2aedzbjgtasro5.jpg", "https://res.cloudinary.com/dpidlverd/image/upload/v1675753800/replica/dxd9wceuayr9izduaje9.jpg", "https://res.cloudinary.com/dpidlverd/image/upload/v1675753759/replica/irpzggf6mwugxmt1cbju.jpg"];

const roll = (min = 0, max = 5) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1))
};

const template = () => `
<section class="RollDice" id="RollDice">
<h2>ROLL THE DICE</h2>
<div class="btn">
    <button id="homeBtn">🏠</button>
</div>
<div class="container">
<img src="${diceNumber[roll()]}" alt="Dice picture" />
<button id='rollBtn'>ROLL!</button>
</div>
</section>
`;

 const addListeners = () => {
    document.querySelector("#homeBtn").addEventListener("click", () =>
     initContent("Home"));
     document.querySelector("#rollBtn").addEventListener("click", () => {
     printTemplate();
     })
 }


export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
};























// const template = () => `
// <section>
//   <div class="resultado"></div>
//     <h2>Quiz!</h2>
//     <div class="juego">
//       <h2>${quiz[0].question}</h2>
//       <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[0].answer.a}</label></p>
//       <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[0].answer.b}</label></p>
//       <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[0].answer.c}</label></p>
//       <h2>${quiz[1].question}</h2>
//       <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[1].answer.a}</label></p>
//       <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[1].answer.b}</label></p>
//       <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[1].answer.c}</label></p>
//       <h2>${quiz[2].question}</h2>
//       <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[2].answer.a}</label></p>
//       <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[2].answer.b}</label></p>
//       <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[2].answer.c}</label></p>
//       <h2>${quiz[3].question}</h2>
//       <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[3].answer.a}</label></p>
//       <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[3].answer.b}</label></p>
//       <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[3].answer.c}</label></p>
//       <h2>${quiz[4].question}</h2>
//       <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[4].answer.a}</label></p>
//       <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[4].answer.b}</label></p>
//       <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[4].answer.c}</label></p>
//       <h2>${quiz[5].question}</h2>
//       <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[5].answer.a}</label></p>
//       <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[5].answer.b}</label></p>
//       <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[5].answer.c}</label></p>
//     </div>
//     <div class="botonEnviar">
//   </div>
// </section>
// `;
// //EL EXPORT
// export const printTemplate = () => {
//   document.querySelector("#app").innerHTML = template();
//   EventosBotones();
// };

// //voy a hacer un array de objetos donde tenga la clase pregunta y la clase respuesta con 3 opciones 
// //------PREGUNTAS----------------------------------------------------------------
// const quiz = [
//   {
//     question: "¿Cuantas copas del mundo ha ganado la selección Argentina?",
//     answer: {
//       a: "una en 1978 y otra en 1986",
//       b: "una en 1978",
//       c: "una en 1978, otra en 1986 y la ultima en 2022",
//     },
//     correctAnswer: "c",
//   },
//   {
//     question: "¿A que país pertenecen las islas Malvinas?",
//     answer: {
//       a: "Argentina",
//       b: "Nadie",
//       c: "Inglaterra",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question:"¿CQuien es el jugador de futbol con más balones de Oro?",
//     answer: {
//       a: "Cristiano Ronaldo",
//       b: "Lionel Messi",
//       c: "Johan Cruyff",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question:"¿De donde proviene el nombre Argentina?",
//     answer: {
//       a: "Del griego y significa 'aguas mansas'",
//       b: "Del latín y significa 'plata'",
//       c: "De las lenguas indígenas y significa 'aire de los dioses'",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question:"¿Cual es la bebida típica, que puede tomarse fría o caliente?",
//     answer: {
//       a: "Aguardiente",
//       b: "Mate",
//       c: "Lejía",
//     },
//     correctAnswer: "b",
//   },
//   {
//     question:"¿De que país se independizó Argentina?",
//     answer: {
//       a: "España",
//       b: "Francia",
//       c: "Inglaterra",
//     },
//     correctAnswer: "a",
//   },
// ];

// let score = 0;
// let index = 0;
// let resultado;
// let rightAnswer = "";
// const answerA = document.querySelector("#a");
// const answerB = document.querySelector("#b");
// const answerC = document.querySelector("#c");
// const preguntas = quiz[index];
// //-----------EVENTOS BOTONES--------------------------------------------------------------
// //ahora tengo que hacer un evento para que me seleccione las respuestas que son correctas 
// //voy a intentar hacer un boton que compruebe si la respuesta es correcta mediante un condicional 

// //voy a crear el boton 
// const botonEnviar = document.createElement('button');
// const div = document.querySelector(".botonEnviar");
// div.appendchild(botonEnviar);
//  const EventosBotones = () => {const checkButton = document.querySelector("#enviar");
//  checkButton.addEventListener("click", () => {
//    if(answerA.checked){
//      rightAnswer = "a";
//    } else if (answerB.checked){
//      rightAnswer = "b";
//    } else if (answerC.checked){
//      rightAnswer = "c";
//    }
//    if(rightAnswer === preguntas.correctAnswer){
//      score++;
//      index++;
//      if (score === 6){
//         console.log("ganaste");
//         document.querySelector(".resultado").innerHTML = `<p class="ganar">Muy bien, ya podés aplicar para el pasaporte Argentino</p>`;
//      } else{
//        resultado.innerHTML = `<p class="perder">Anda pallá bobo..</p>`;
//      };
//    };
//  })
// ;}





