import './style.css'
import { printTemplate as HomeTemplate } from './pages/Home/home';
import { printTemplate as LoginTemplate } from './pages/Login/Login';
import { printTemplate as ApiTemplate } from './pages/ApiPokemon/Api';
import { printTemplate as QuizTemplate} from './pages/Quiz/Quiz';
import { printTemplate as PPTTemplate} from './pages/PPT/Ppt';



//----SWITCH  
export const initContent = (route) => {
  switch (route) {
     case undefined:
         localStorage.getItem("user")? HomeTemplate() : LoginTemplate();
       break;
    case "Login":
      LoginTemplate();
      break;
    case "Pokemon_Api":
      ApiTemplate();
      break;
    case "Quiz":
      QuizTemplate();
      break;
    case "Piedra_Papel_o_Tijera":
      PPTTemplate();
      break;
    case "Home":
      HomeTemplate();
      break;
  }
};

HomeTemplate();
initContent();
//----COLOR PICKER
const COLOR_PALETTE = {
  '#907F9F': 'Lavender',
  '#7A89C2': 'Glaucouse',
  '#136F63': 'Pine Green',
  '#1B263B':'Oxford Blue',
  '#0B5563': 'Midnight Green Eagle Green',
  '#fffbfa': 'Crema'
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}
const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();


 //----LOCAL STORAGE PARA EL NOMBRE 
//  const container = document.querySelector("#app");


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
