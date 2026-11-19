export class Grupo {

    private nombre: string;
    private puntos: number;
    private img: string;
    private personaje: string

    constructor(nombre: string, puntos: number = 0, urlImagen: string, personaje: string) {
        this.nombre = nombre;
        this.puntos = puntos;
        this.img = urlImagen;
        this.personaje = personaje;
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

    getPersonaje(){
        return this.personaje;
    }

    conPuntos(cantidad: number) {
        return new Grupo(this.nombre, this.puntos + cantidad, this.img, this.personaje);
    }
}