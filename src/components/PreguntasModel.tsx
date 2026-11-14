import { PreguntaModel } from '../ts/PreguntaModel';


function PreguntasModel({ pregunta }: { pregunta: PreguntaModel }) {
    return (
        <div>
            <div className="enunciado">
                <h1>{pregunta.getEnunciado()}</h1>
            </div>
            <div className="opciones">
                {
                    pregunta.getOpciones()?.map((o) => (
                        <div>
                            <p>{o.opcion}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PreguntasModel