import "../styles/UI.css";
import fabian from "../characters/animation/Fabian_cara.gif";
import junior from "../characters/animation/Junior_cara.gif";
import analog_boy from "../characters/animation/Analog_Boy_cara.gif"
import { Preguntas } from "../ts/Preguntas";
import { useState } from "react";
import { Grupo } from "../ts/Grupo";

function UiGameplay({ pregunta }: { pregunta: Preguntas }) {

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
            sumar(`Grupo${turno}`, 50);
            setTimeout(() => {
                siguientePregunta();
                reproducirSonido();
            }, 1000)
        } else {
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
    const reproducirSonido = () => {
        if (esCorrecta) {
            // Sonido positivo
        } else {
            //Sonido negativo
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

    //Cambia la variable turno para luego pasarsela a actualizar grupo.
    const siguienteTurno = () => {
        setTurno(turnoAnterior => {
            if (turnoAnterior >= MAX_TURNO) {
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

                            <div className="primer-grupo-contenedor">
                                <img src={fabian} alt=""  className="icon"/>
                                <div className="grupo-detalles">
                                    <p>Grupo 1</p>
                                    <p>150 pts</p>
                                </div>
                            </div>

                            <div className="segundo-grupo-contenedor">
                                <img src={junior} alt="" className="icon" />
                                <div className="grupo-detalles">
                                    <p>Grupo 2</p>
                                    <p>150 pts</p>
                                </div>
                            </div>

                        </div>
                        <div className="enunciado">
                            <p className="pregunta">Pregunta:</p>
                            <p>{pregunta.getPregunta().enunciado}</p>
                        </div>

                        <div className="comodines-grupo">
                            <button>50/50</button>
                            <button>Llamada</button>
                            <button>Público</button>
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

export default UiGameplay;