export type Opciones = {
    A: string;
    B: string;
    C: string;
    D: string;
}


export interface Pregunta {
    enunciado: string,
    opciones: Opciones;
    correcta: string;
}



export class Preguntas {

    private preguntas: Pregunta[];
    private posicion: number;

    constructor(preguntas: Pregunta[]) {
        this.preguntas = preguntas;
        this.posicion = 0;
    }


    getPregunta() {
        return this.preguntas[this.posicion];
    }

    siguientePregunta() {
        if (this.posicion < this.preguntas?.length - 1) {
            this.posicion++;
        }
    }

    validarOpcion(opcion: string): boolean {
        return opcion === this.getPregunta().correcta;
    }

}