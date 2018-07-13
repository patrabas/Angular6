import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';
import { Routes, RouterModule } from '@angular/router';
import { ListadoNominasComponent } from './empleados/listado-nominas/listado-nominas.component';
import { ComunesModule } from '../comunes/comunes.module';

const rutas: Routes = [
  {path:'', component: ListadoEmpleadosComponent},
  {path:'listado-nominas', component: ListadoNominasComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ComunesModule,
    RouterModule.forChild(rutas)
  ],
  declarations: [ListadoEmpleadosComponent, ListadoNominasComponent]
})
export class RrhhModule { }
