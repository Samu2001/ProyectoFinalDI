import { DetallesComponent } from './components/detalles/detalles.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path :'',pathMatch:'full',redirectTo:"home"},
  {path :'home',component:HomeComponent},
  {path :'ciclos',component:CiclosComponent},
  {path :'asignaturas',component:AsignaturasComponent},
  {path :'detalles',component:DetallesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //en caso de error 404
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
