export class Ciclos{


    constructor(
        private nombre:string,
        private curso:number,
        private asignaturas:string[],
        private imagen:string){

    }


    mostrarToString () {
        console.log(`${this.nombre} ${this.curso} ${this.asignaturas}${this.imagen} `);
    }

}