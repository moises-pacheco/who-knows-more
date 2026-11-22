import "../styles/UISeleccionDePersonaje.css";

//PERSONAJES
import fabian from "../characters/Fabian.gif";
import junior from "../characters/Junior.gif";
import analogBoy from "../characters/Analog_Boy.gif";

// CLASES

import { Grupo } from "../ts/Grupo";
import { useState } from "react";


interface Props {
    grupos: Grupo[];
    setGrupos: React.Dispatch<React.SetStateAction<Grupo[]>>;
}



function UISeleccionDePersonaje({ grupos, setGrupos }: Props) {

    //Hooks
    const [turno, setTurno] = useState(1);

    const alPresionarSeleccion = (img_personaje: string, nombre_personaje: string) => {
        if (grupos.length >= 2) {
            console.log("Solo puedes almacenar dos grupos");
            return;
        }

        const nuevoGrupo = new Grupo(`Grupo ${turno}`, 0, img_personaje, nombre_personaje);
        setGrupos(prev => [...prev, nuevoGrupo]);
        console.log(nuevoGrupo);

        if (turno < 2) {
            setTurno(prev => prev + 1);
        }

    }


    return (
        <>
            <div className="contenedor">
                <h1 className="seleccion-personaje-h1">
                    <span className="resaltar">{`Grupo ${turno}`}</span> SELECT YOUR CHARACTER
                </h1>
                <div className="seleccion">

                    <div className="personaje-seleccion fabian">
                        <h1>FABIAN</h1>
                        <img src={fabian} alt="" />
                        <button onClick={() => { alPresionarSeleccion(fabian, "Fabian") }}>SELECT</button>
                    </div>

                    <div className="personaje-seleccion junior">
                        <h1>JUNIOR</h1>
                        <img src={junior} alt="" />
                        <button onClick={() => { alPresionarSeleccion(junior, "Junior") }}>SELECT</button>
                    </div>
                    <div className="personaje-seleccion analog_boy">
                        <h1>ANALOG BOY</h1>
                        <img src={analogBoy} alt="" />
                        <button onClick={() => { alPresionarSeleccion(analogBoy, "Analog Boy") }}>SELECT</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UISeleccionDePersonaje;