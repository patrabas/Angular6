import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  @Input() jugadores;
  @Output() canasta: EventEmitter<any> = new EventEmitter();
  topJugadores: any[];
  constructor() { }

  ngOnInit() {
    this.topJugadores = this.jugadores.concat();
  }

  setCanasta(puntos:number, nombre:string){
    this.canasta.emit({puntos,nombre});
    this.topJugadores.sort((a,b)=>{
      return (b.puntos - a.puntos);
    })
  }
}
