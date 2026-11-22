import "../styles/Modal.css";
import telefono from "../img/comodines/telefono_blanco.gif"
import { useState, useEffect } from "react";


interface Props {
  segundos: number,
  onCerrar: () => void;
}

function ModalComodinLlamada({segundos, onCerrar}: Props) {


   const [tiempo, setTiempo] = useState(segundos);

    useEffect(() => {
        const inicio = setInterval(() => setTiempo(prev => prev - 1), 1000);
        const fin = setTimeout(onCerrar, segundos * 1000);

        return () => {                 // limpieza
            clearInterval(inicio);
            clearTimeout(fin);
        };
    }, []);



  return (
    <>
      <div className="contenedor-modal">
        <div className="contenedor-comodin">
          <h1 className="titulo">Call someone or look it up online</h1>
          <div className="telefono-y-tiempo">
            <img src={telefono} alt="" className="telefono" />
            <p className="tiempo">{tiempo}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalComodinLlamada;