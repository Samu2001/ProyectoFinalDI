import { Component, OnInit } from '@angular/core';
import { AsignaturasServiceService } from 'src/app/services/asignaturas-service.service';
import { RecorrerAsignaturaInterfaz } from 'src/app/utils/RecorrerAsignaturaInterfaz';
import { RecorrerCursosInterfaz } from 'src/app/utils/RecorrerCursoInterfaz';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  asignatura:RecorrerAsignaturaInterfaz[]=[];
  ciclo:RecorrerCursosInterfaz[]=[];
  imagen:string="";
  constructor(public data:AsignaturasServiceService) {

  }

  ngOnInit(): void {
    this.ciclo=this.data.getInterfazCiclos();
    this.asignatura=this.data.detalleFiltrado;
    this.asignatura.forEach(element => {
      this.ciclo.forEach(e=>{
        if(element.ciclo=="DAM | DAW"){
          this.imagen=e.imagen;
          console.log(this.imagen);
          
        }
      });
    });
    console.log(this.asignatura);
    console.log(this.ciclo);
    
  }



}
