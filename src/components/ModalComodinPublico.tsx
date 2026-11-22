import type { Pregunta } from "../ts/Preguntas";
import { useEffect, useState } from "react";



function ModalComodinPublico({ pregunta, onCerrar }: { pregunta: Pregunta, onCerrar: () => void }) {

  const { opciones, correcta } = pregunta;

  let opcionesIncorrectas = Object.entries(opciones)
    .filter(([, opcion]) => opcion != correcta)
    .map(([,opcion]) => opcion);

  let opcionCorrecta = Object.entries(opciones)
    .filter(([, opcion]) => opcion == correcta)
    .map(([,opcion]) => opcion);


  const [rangos, setRangos] = useState<number>(0)
  const [rangoOpcionCorrecta, setRangoOpcionCorrecta] = useState<number>(0);


  //variar votos

  const calcularVotos = () => {
    const MAX = 15;
    let numeroRandom = Math.floor(Math.random() * MAX);
    setRangos(numeroRandom);
    setRangoOpcionCorrecta(numeroRandom);
  }

  const mostrarPublico = () => {
    let vuelta = 0;

    const inicio = setInterval(() => {
      vuelta++;
      if (vuelta < 10) {
        calcularVotos();
      } else {
        clearInterval(inicio);
        setRangos(8);
        setRangoOpcionCorrecta(15);
      }
    }, 1000)

    return inicio;
  }

  useEffect(() => {
    const inicio = mostrarPublico();
    const fin = setTimeout(onCerrar, 15 * 1000);

    return () => {
      clearInterval(inicio);
      clearTimeout(fin);
    }
  }, [])


  return (
    <div className="contenedor-modal">
      <div className="contenedor-comodin">
        <h1 className="titulo">The audience is voting.</h1>
        <div className="opciones-comodin">
          {opcionesIncorrectas.map((letra) => (
            <div className="op">
              <p>{letra}</p>
              <div className={`votos`} style={{ width: `${rangos}em` }} key={letra}></div>
            </div>
          ))}
          <div className="op">
            <p>{opcionCorrecta}</p>
            <div className="votos" style={{width: `${rangoOpcionCorrecta}em`}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComodinPublico


