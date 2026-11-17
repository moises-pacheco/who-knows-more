export class Grupo {

    private nombre: string;
    private puntos: number;

    constructor(nombre: string, puntos: number = 0) {
        this.nombre = nombre;
        this.puntos = puntos;
    }

    getNombre() {
        return this.nombre;
    }

    getPuntos(){
        return this.puntos;
    }

    sumarPuntos(cantidad: number) {
        return new Grupo(this.nombre, this.puntos + cantidad);
    }
}