import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: any;
  @ViewChild('formCliente') formCliente: NgForm;
  constructor() { }

  ngOnInit() {

  }
  crearCliente(formCliente){
    this.cliente = {
      nombre: formCliente.controls.nombre.value,
      cif: this.formCliente.controls.cif.value,
      email: formCliente.controls.email.value,
      createdAt: new Date()
    }
  }

}
