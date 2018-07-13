import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangfor',
  templateUrl: './directivangfor.component.html',
  styleUrls: ['./directivangfor.component.css']
})
export class DirectivangforComponent implements OnInit {

  clientes: Array<any> = [
    {nombre:'Iberdrola', cif:'A12345678'},
    {nombre:'Gas Natural', cif:'A87654321'},
    {nombre:'Vodafone', cif:'A6789543'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
