import "../styles/UISeleccionDePersonaje.css";

//PERSONAJES
import fabian from "../characters/Fabian.gif";
import junior from "../characters/Junior.gif";
import analogBoy from "../characters/Analog_Boy.gif";

// CLASES

import { Grupo } from "../ts/Grupo";

function UISeleccionDePersonaje() {
    return (
        <>
            <div className="contenedor">
                <h1 className="seleccion-personaje-h1">
                    <span className="resaltar-grupo">GROUP 1:</span> SELECT YOUR CHARACTER
                </h1>
                <div className="seleccion">

                    <div className="personaje fabian">
                        <h1>Fabian</h1>
                        <img src={fabian} alt="" />
                        <button>Select</button>
                    </div>

                    <div className="personaje junior">
                        <h1>Junior</h1>
                        <img src={junior} alt="" />
                        <button>Select</button>
                    </div>
                    <div className="personaje analog_boy">
                        <h1>Analog Boy</h1>
                        <img src={analogBoy} alt="" />
                        <button>Select</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UISeleccionDePersonaje;