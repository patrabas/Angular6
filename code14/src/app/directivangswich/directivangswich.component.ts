import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangswich',
  templateUrl: './directivangswich.component.html',
  styleUrls: ['./directivangswich.component.css']
})
export class DirectivangswichComponent implements OnInit {

  jugadores = [
    {nombre: 'Kyle Kuzma', equipo: 'lakers'},
    {nombre: 'Aaron Bynes', equipo: 'celtics'},
    {nombre: 'Justin Holiday', equipo: 'bulls'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
