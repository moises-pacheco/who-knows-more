export interface PreguntaDTO {
    enunciado: string;
    opciones: Opcion[];

}

export type Opcion = {
    opcion: string;
    porcentajeDePublico: number;
    esCorrecta: boolean;
}


export class PreguntaModel {

    private enunciado: string | undefined;
    private opciones: Opcion[] | undefined;

    constructor(data: PreguntaDTO){
        this.enunciado = data.enunciado;
        this.opciones = data.opciones;
    }

    getEnunciado(){
        return this.enunciado;
    }

    getOpciones(){
        return this.opciones;
    }

}