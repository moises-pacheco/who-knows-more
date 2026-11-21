import UISeleccionDePersonaje from "./components/UISeleccionDePersonaje";

import { obtenerPreguntas } from "./ts/obtenerPreguntas";
import { Preguntas } from "./ts/Preguntas";

import './App.css'
import { Grupo } from './ts/Grupo';
import { useState } from "react";
import UIGameplay from "./components/UIGameplay";


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
