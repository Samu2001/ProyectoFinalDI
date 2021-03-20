export interface RecorrerAsignaturaInterfaz{
    nombre:string,
    profesor:string,
    conocimientos:ReqUsers[],
    ciclo:string,
    curso:number
}

export interface FiltradoInterfaz{
    nombre:string,
    conocimientos:filTrado[],
    ciclo:string,
}
interface filTrado{
    nombre:string,
    imagen:string,   
}

export interface NuevoAsigna{
    nuevo:string;
}

interface ReqUsers{
    nombre:string,
    imagen:string,
    
}
