import UISeleccionDePersonaje from "./components/UISeleccionDePersonaje";
import UIGameplay from "./components/UIGameplay";
import ModalComodinLlamada from "./components/ModalComodinLlamada";

import { obtenerPreguntas } from "./ts/obtenerPreguntas";
import { Preguntas } from "./ts/Preguntas";

import './App.css'
import { Grupo } from './ts/Grupo';
import { useState } from "react";


const preguntasDTO = await obtenerPreguntas("../src/json/preguntas.json");
const preguntas = new Preguntas(preguntasDTO);


function App() {
  const [grupos,setGrupos] = useState<Grupo[]>([]);

  if(grupos.length < 2){
    return <UISeleccionDePersonaje grupos={grupos} setGrupos={setGrupos}/>
  }

  return <UIGameplay pregunta={preguntas} grupos={grupos} setGrupos={setGrupos}/>
  

}

export default App
