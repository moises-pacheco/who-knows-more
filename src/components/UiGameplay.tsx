import "../styles/UIGameplay.css";
import fabian from "../characters/animation/Fabian_cara.gif";
import junior from "../characters/animation/Junior_cara.gif";
import analog_boy from "../characters/animation/Analog_Boy_cara.gif"
import { Preguntas } from "../ts/Preguntas";
import React, { useState } from "react";
import { Grupo } from "../ts/Grupo";
import sfx_confirm from "../sfx/sfx_confirm.mp3";
import sfx_error from "../sfx/sfx_error.mp3";


function UIGameplay({ pregunta }: { pregunta: Preguntas }) {

    //AUDIO


    //HOOKS
    const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);
    const [esCorrecta, setEsCorrecta] = useState<boolean | null>(null);
    const [grupos, setGrupos] = useState<Grupo[]>([
        new Grupo("Grupo 1", 0, fabian, "Fabian"),
        new Grupo("Grupo 2", 0, junior, "Junior")
    ]);

    const MAX_TURNO = 2;
    const [turno, setTurno] = useState(1);

    //FUNCIONES
    const alPresionarOpcion = (letra: string, texto: string) => {
        const resultado: boolean = pregunta.validarOpcion(texto);
        setOpcionSeleccionada(letra);
        setEsCorrecta(resultado);

        if (resultado) {
            reproducirSonido(resultado);
            sumar(`Grupo ${turno}`, 50);
            setTimeout(() => {
                siguientePregunta();
            }, 1000)
        } else {
            reproducirSonido(resultado);
            setTimeout(() => {
                limpiarRespuesta();
                siguienteTurno();
            }, 1000)
        }
    }

    // Obtener la clase actual según la respuesta dada
    const getClase = (letra: string): string => {
        if (opcionSeleccionada !== letra) return "";
        return esCorrecta ? "correcta" : "incorrecta";
    }

    //Función para llevar al jugador a la siguiente pregunta.
    const siguientePregunta = () => {
        pregunta.siguientePregunta();
        setOpcionSeleccionada(null);
        setEsCorrecta(null);
    }

    const limpiarRespuesta = () => {
        setOpcionSeleccionada(null);
        setEsCorrecta(null);
    }

    //Reproducir sonido dependiendo de la respuesta.
    const reproducirSonido = (correcta: boolean) => {
        if (correcta) {
            let sfx_c = new Audio(sfx_confirm);
            sfx_c.play();
        }

        if(!correcta){
            let sfx_e = new Audio(sfx_error);
            sfx_e.play();
        }
          


    }

    const sumar = (nombre: string, cantidad: number) => {
        setGrupos(grupos => {
            return grupos.map(grupo =>
                grupo.getNombre() === nombre
                    ? grupo.conPuntos(grupo.getPuntos() + cantidad)
                    : grupo
            );
        })
    }

    //Actualizar el turno actual si se equivoca algún jugador
    const actualizarGrupo = (turno: number): Grupo | undefined => {
        let turnoGrupo = "";

        if (turno == 1) turnoGrupo = "Grupo 1";
        if (turno == 2) turnoGrupo = "Grupo 2";

        if (grupos) return grupos.find((g) => g.getNombre() == turnoGrupo);
    }

    //LÓGICA DE SELECCIÓN DE GRUPOS
    const seleccionarGrupo = (event: React.MouseEvent<HTMLDivElement>) => {
        const id = event.currentTarget.id;
        console.log(id);
        if(id == "Grupo 1") setTurno(1);
        else if(id == "Grupo 2") setTurno(2);
        else console.warn("No se ha detectado ningún grupo.")
    }


    //Cambia la variable turno para luego pasarsela a actualizar grupo.
    const siguienteTurno = () => {
        setTurno(turnoAnterior => {
            if (turnoAnterior >= MAX_TURNO) {
                siguientePregunta();
                return 1;
            } else {
                return turnoAnterior + 1;
            }
        })
    }

    const grupoSeleccionado = actualizarGrupo(turno);




    return (
        <div className="contenedor-global">
            <div className="contenedor-jugador-comodines-pregunta">

                <div className="personaje-pregunta-comodines">

                    <div className="personaje">
                        <img src={grupoSeleccionado?.getImagen()} />
                        <div className="nombre-personaje-contenedor">
                            <p className="nombre-personaje">{grupoSeleccionado?.getPersonaje()}</p>
                        </div>
                    </div>

                    <div className="pregunta-contenedor-grupos">

                        <div className="selector-grupos">

                            <div className="primer-grupo-contenedor" id="Grupo 1" onClick={(event) => {seleccionarGrupo(event)}}>
                                <img src={fabian} alt="" className="icon" />
                                <div className="grupo-detalles">
                                    <p>Grupo 1</p>
                                    <p>{grupos[0].getPuntos()} pts</p>
                                </div>
                            </div>

                            <div className="segundo-grupo-contenedor" id="Grupo 2" onClick={(event) => {seleccionarGrupo(event)}}>
                                <img src={junior} alt="" className="icon" />
                                <div className="grupo-detalles">
                                    <p>Grupo 2</p>
                                    <p>{grupos[1].getPuntos()} pts</p>
                                </div>
                            </div>

                        </div>
                        <div className="enunciado">
                            <p className="pregunta">Question:</p>
                            <p>{pregunta.getPregunta().enunciado}</p>
                        </div>

                        <div className="comodines-grupo">
                            <button>50/50</button>
                            <button>Call</button>
                            <button>Audience</button>
                        </div>
                    </div>

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
    )
}

export default UIGameplay;