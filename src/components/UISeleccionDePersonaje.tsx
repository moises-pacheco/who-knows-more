import "../styles/UISeleccionDePersonaje.css";

//PERSONAJES
import fabian from "../characters/Fabian.gif";
import junior from "../characters/Junior.gif";
import analogBoy from "../characters/Analog_Boy.gif";

function UISeleccionDePersonaje() {
    return (
        <>
            <div className="contenedor">
                <div className="seleccion">

                    <div className="personaje">
                        <h1>Fabian</h1>
                        <img src={fabian} alt="" />
                        <button>Seleccionar</button>
                    </div>

                    <div className="personaje">
                        <h1>Junior</h1>
                        <img src={junior} alt="" />
                        <button>Seleccionar</button>
                    </div>
                    <div className="personaje">
                        <h1>Analog Boy</h1>
                        <img src={analogBoy} alt="" />
                        <button>Seleccionar</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UISeleccionDePersonaje;