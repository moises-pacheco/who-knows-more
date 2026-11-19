export class Grupo {

    private nombre: string;
    private puntos: number;
    private img: string;

    constructor(nombre: string, puntos: number = 0, urlImagen: string) {
        this.nombre = nombre;
        this.puntos = puntos;
        this.img = urlImagen;
    }

    getNombre() {
        return this.nombre;
    }

    getPuntos(){
        return this.puntos;
    }

    getImagen(){
        return this.img;
    }

    conPuntos(cantidad: number) {
        return new Grupo(this.nombre, this.puntos + cantidad, this.img);
    }
}