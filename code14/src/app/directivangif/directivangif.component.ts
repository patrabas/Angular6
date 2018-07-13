import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangif',
  templateUrl: './directivangif.component.html',
  styleUrls: ['./directivangif.component.css']
})
export class DirectivangifComponent implements OnInit {

  repositorio: string = 'code14';
  repositorioCheck: string;
  capital: string;
  constructor() { }

  ngOnInit() {
  }

  setResultado(capital){ 
    return this.capital.toLowerCase() === 'santander' ? true:false;
  }
}
