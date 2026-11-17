import "../styles/UI.css";
import girl from "../img/girl.gif";
import { Preguntas } from "../ts/Preguntas";
import { useState } from "react";

function UiGameplay({ pregunta }: { pregunta: Preguntas }) {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);
    const [esCorrecta, setEsCorrecta] = useState<boolean | null>(null);

    const alPresionarOpcion = (letra: string, texto: string) => {
        const resultado: boolean = pregunta.validarOpcion(texto);
        setOpcionSeleccionada(letra);
        setEsCorrecta(resultado);

        if (resultado) {
            setTimeout(() => {
                siguientePregunta();
            }, 1000)
        }
    }

    const getClase = (letra: string): string => {
        if (opcionSeleccionada !== letra) return " ";
        return esCorrecta ? "correcta" : "incorrecta";
    }

    const siguientePregunta = () => {
        pregunta.siguientePregunta();
        setOpcionSeleccionada(null);
        setEsCorrecta(null);
    }


    return (
        <div className="contenedor">

            <div className="grupo">
                <div className="nombre-grupo">
                    <p>{ }</p>
                    <div className="comodines-grupo">
                        <button>50/50</button>
                        <button>Llamada</button>
                        <button>Público</button>
                    </div>
                </div>
            </div>

            <div className="pregunta-contenedor">

                <div className="jugador">
                    <div className="puntos">
                        <p> pts</p>
                    </div>
                    <div className="img-jugador">
                        <img src={girl} />
                    </div>
                </div>

                <div className="pregunta">
                    <div className="enunciado">
                        <p>{pregunta.getPregunta().enunciado}</p>
                    </div>
                    <div className="opciones">
                        {Object.entries(pregunta.getPregunta().opciones).map(([letra, texto]) => (
                            <button
                                key={letra}
                                className={`opcion ${getClase(letra)}`}
                                onClick={() => alPresionarOpcion(letra, texto)}
                            >{texto}</button>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UiGameplay;