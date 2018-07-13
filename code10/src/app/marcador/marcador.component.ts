import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {
  jugadores: any[] = [
    {nombre: 'Isaiah Thomas', puntos: 0, imagen: 'assets/thomas.png'},
    {nombre: 'Kyle Kuzman', puntos: 0, imagen: 'assets/kuzma.png'},
    {nombre: 'Julius Randle', puntos: 0, imagen: 'assets/randle.png'},
    {nombre: 'Brandom Ingram', puntos: 0, imagen: 'assets/ingram.png'},
    {nombre: 'Brook López', puntos: 0, imagen: 'assets/lopez.png'}
  ];
  puntosEquipo:number = 0;

  constructor() { }

  ngOnInit() {
  }
  getCanasta(event){
    this.puntosEquipo += event.puntos;
    this.jugadores.forEach(jugador => {
      if(jugador.nombre === event.nombre){
        jugador.puntos += event.puntos;
      }
    });
  }
}
