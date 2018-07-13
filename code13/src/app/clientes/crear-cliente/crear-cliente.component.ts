import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(public clientesService: ClientesService) { }

  ngOnInit() {
  }
  setCliente(){
    this.clientesService.postCliente({nombre: 'Telefónica', cif:'A000000'});
  }

}
