
import { type Pregunta } from "./Preguntas";

export async function obtenerPreguntas(url:string){
    const preguntasDTO = await fetch(url);

    if(!preguntasDTO.ok){
        throw new Error("No se ha podido realizar la petición.")
    }

    const preguntas = await preguntasDTO.json() as Pregunta[];
    return preguntas;
}