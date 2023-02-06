

import "./Quiz.css";

const template = () => `
<section class="quiz">
    <h2>Quiz!</h2>
    <div class="juego">
      <h2>${quiz[0].question}</h2>
      <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[0].answer.a}</label></p>
      <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[0].answer.b}</label></p>
      <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[0].answer.c}</label></p>
      <h2>${quiz[1].question}</h2>
      <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[1].answer.a}</label></p>
      <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[1].answer.b}</label></p>
      <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[1].answer.c}</label></p>
      <h2>${quiz[2].question}</h2>
      <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[2].answer.a}</label></p>
      <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[2].answer.b}</label></p>
      <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[2].answer.c}</label></p>
      <h2>${quiz[3].question}</h2>
      <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[3].answer.a}</label></p>
      <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[3].answer.b}</label></p>
      <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[3].answer.c}</label></p>
      <h2>${quiz[4].question}</h2>
      <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[4].answer.a}</label></p>
      <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[4].answer.b}</label></p>
      <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[4].answer.c}</label></p>
      <h2>${quiz[5].question}</h2>
      <p><input type="checkbox" class="answer" id="a"><label for="a">${quiz[5].answer.a}</label></p>
      <p><input type="checkbox" class="answer" id="b"><label for="a">${quiz[5].answer.b}</label></p>
      <p><input type="checkbox" class="answer" id="c"><label for="a">${quiz[5].answer.c}</label></p>
    </div>
    <div class="botonEnviar">
    <button id="enviar">check</button>
  </div>
</section>
`;
//EL EXPORT
export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};

//voy a hacer un array de objetos donde tenga la clase pregunta y la clase respuesta con 3 opciones 
//------PREGUNTAS----------------------------------------------------------------
const quiz = [
  {
    question: "¿Cuantas copas del mundo ha ganado la selección Argentina?",
    answer: {
      a: "una en 1978 y otra en 1986",
      b: "una en 1978",
      c: "una en 1978, otra en 1986 y la ultima en 2022",
    },
    correctAnswer: "c",
  },
  {
    question: "¿A que país pertenecen las islas Malvinas?",
    answer: {
      a: "Argentina",
      b: "Nadie",
      c: "Inglaterra",
    },
    correctAnswer: "a",
  },
  {
    question:"¿CQuien es el jugador de futbol con más balones de Oro?",
    answer: {
      a: "Cristiano Ronaldo",
      b: "Lionel Messi",
      c: "Johan Cruyff",
    },
    correctAnswer: "b",
  },
  {
    question:"¿De donde proviene el nombre Argentina?",
    answer: {
      a: "Del griego y significa 'aguas mansas'",
      b: "Del latín y significa 'plata'",
      c: "De las lenguas indígenas y significa 'aire de los dioses'",
    },
    correctAnswer: "b",
  },
  {
    question:"¿Cual es la bebida típica, que puede tomarse fría o caliente?",
    answer: {
      a: "Aguardiente",
      b: "Mate",
      c: "Lejía",
    },
    correctAnswer: "b",
  },
  {
    question:"¿De que país se independizó Argentina?",
    answer: {
      a: "España",
      b: "Francia",
      c: "Inglaterra",
    },
    correctAnswer: "a",
  },
];
//-----------EVENTOS BOTONES--------------------------------------------------------------
//ahora tengo que hacer un evento para que me seleccione las respuestas que son correctas 
//voy a intentar hacer un boton que compruebe si la respuesta es correcta mediante un condicional 
const checkButton = document.querySelector("#enviar");

// checkButton.addEventListener("click", () => { let correctAnswer = "";
// const answerA = document.querySelector("#a");
// const answerB = document.querySelector("#b");
// const answerC = document.querySelector("#c");
// if(answerA.checked){
//   rightAnswer = "a";
// } else if (answerB.checked){
//   rightAnswer = "b";
// } else if (answerC.checked){
//   rightAnswer = "c";
// }

// if (rightAnswer === quiz.correctAnswer){

// };
// }
