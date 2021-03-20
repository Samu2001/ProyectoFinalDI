export class Asignatura{


    constructor(
        private nombre:string,
        private profesor:string,
        private conocimientos:string[],
        private ciclos:string,
        private curso:number){

    }


    mostrarToString(){
        console.log(`
        ${this.nombre} 
        ${this.profesor} 
        ${this.conocimientos} 
        ${this.ciclos} 
        ${this.curso}`);
        
    }

}  

