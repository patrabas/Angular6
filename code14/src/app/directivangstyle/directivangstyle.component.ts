import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangstyle',
  templateUrl: './directivangstyle.component.html',
  styleUrls: ['./directivangstyle.component.css']
})
export class DirectivangstyleComponent implements OnInit {
  puntuacion: number;
  constructor() { }

  ngOnInit() {
  }
  colorPuntuacion(){
    return this.puntuacion >= 5 ? 'green' : 'red';
  }
}
