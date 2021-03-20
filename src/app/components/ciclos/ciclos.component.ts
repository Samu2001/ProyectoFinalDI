import { AsignaturasServiceService } from './../../services/asignaturas-service.service';
import { RecorrerAsignaturaInterfaz } from 'src/app/utils/RecorrerAsignaturaInterfaz';
import { Component, OnInit } from '@angular/core';
import { RecorrerCursosInterfaz } from 'src/app/utils/RecorrerCursoInterfaz';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  pintarAsignatura:RecorrerAsignaturaInterfaz[]=[];
  pintarCiclo:RecorrerCursosInterfaz[]=[];
  curso:string="";
  constructor(public asignatura: AsignaturasServiceService,public ciclo:AsignaturasServiceService, public data:AsignaturasServiceService) {

  }
  
  ngOnInit(): void {
    this.pintarAsignatura = this.asignatura.getInterfaz();
    this.pintarCiclo = this.ciclo.getInterfazCiclos();
  } 

  DatosDam(curso:number){
   this.pintarAsignatura= this.asignatura.getFiltraloDam(curso);
   this.asignatura.setDetalle(this.pintarAsignatura);
  
  }

  DatosDaw(curso:number){
   this.pintarAsignatura= this.asignatura.getFiltraloDaw(curso);
   this.asignatura.setDetalle(this.pintarAsignatura);
  }

}
