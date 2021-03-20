import { AsignaturasServiceService } from './../../services/asignaturas-service.service';
import { Component, OnInit } from '@angular/core';
import { RecorrerAsignaturaInterfaz } from 'src/app/utils/RecorrerAsignaturaInterfaz';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  contador :number = this.filtrame.getFitlradoDefecto().length;
  nombreSelect:string="";
  cicloSelect:string="";
  conocimientoeSelect:string="";
  filtro:number=0;
  filtrado:RecorrerAsignaturaInterfaz[]=[];
  constructor(public filtrame:AsignaturasServiceService) { }

  ngOnInit(): void {
    this.filtrado = this.filtrame.getFitlradoDefecto();
  }

  filtrarDatos(parametro:string){
    console.log(parametro);
  }

  comparar(nombreSelect:string,cicloSelect:string,conocimientoeSelect:string){
    this.filtrado= this.filtrame.filtradodeTres(nombreSelect,cicloSelect,conocimientoeSelect);
    console.log(this.filtro);
    this.contador = this.filtrado.length;

}

}
