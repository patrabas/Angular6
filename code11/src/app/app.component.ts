import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  texto = "cuidad de Santander";
  id:any = 3;
  fecha = new Date();
  importe = 123213129.12304384923849;
  aciertos = 0.0239;
  jugador = {nombre: 'Paco', apellidos: 'Perez'};
  decimal = 3.13892839;

  ngOnInit(){
    this.id = '00000' + this.id;
  }
}
