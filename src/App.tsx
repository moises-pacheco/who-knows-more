import UI from "./components/UiGameplay";
import { obtenerPreguntas } from "./ts/helpers";
import './App.css'
import { Preguntas } from "./ts/Preguntas";
import UiGameplay from "./components/UiGameplay";
import { Grupo } from "./ts/Grupo";


const preguntasDTO = await obtenerPreguntas("../src/json/preguntas.json");
const preguntas = new Preguntas(preguntasDTO);


function App() {


  return (
    <>
      <UiGameplay
        pregunta={preguntas}
      />
    </>
  )
}

export default App
