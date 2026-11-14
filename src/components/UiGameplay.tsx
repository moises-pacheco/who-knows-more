import "../styles/UI.css";
import girl from "../img/girl.gif";
import { Preguntas } from "../ts/preguntas";

function UiGameplay({pregunta}: {pregunta: Preguntas}) {
    return (
        <div className="contenedor">

            <div className="grupo">
                <div className="nombre-grupo">
                    <p>Grupo 1</p>
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
                        <p>2500 pts</p>
                    </div>
                    <div className="img-jugador">
                        <img src={girl}/>
                    </div>
                </div>

                <div className="pregunta">
                    <div className="enunciado">
                        <p>{pregunta.getPregunta().enunciado}</p>
                    </div>
                    <div className="opciones">
                        <button className="opcion">{pregunta.getPregunta().opciones.A}</button>
                        <button className="opcion">{pregunta.getPregunta().opciones.B}</button>
                        <button className="opcion">{pregunta.getPregunta().opciones.C}</button>
                        <button className="opcion">{pregunta.getPregunta().opciones.D}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UiGameplay;