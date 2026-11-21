import UI from "./components/UIGameplay";
import { obtenerPreguntas } from "./ts/obtenerPreguntas";
import './App.css'
import { Preguntas } from "./ts/Preguntas";
import UiGameplay from "./components/UIGameplay";
import { Grupo } from "./ts/Grupo";
import UISeleccionDePersonaje from "./components/UISeleccionDePersonaje";


const preguntasDTO = await obtenerPreguntas("../src/json/preguntas.json");
const preguntas = new Preguntas(preguntasDTO);


function App() {


  return (
    <>
      <UISeleccionDePersonaje/>
    </>
  )
}

export default App
