import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root' // nuevo en angular 6
})
export class ClientesService {

  clientes: Array<Cliente> = [
    {nombre:'Iberdrola', cif:'A12345678'},
    {nombre:'Gas Natural', cif:'A87654321'},
    {nombre:'Vodafone', cif:'A6789543'}
  ];
  username: string = 'Patri';

  constructor() { }

  getClientes(){
    return this.clientes;
  }
  postCliente(cliente){
    this.clientes.push(cliente);
  }
}
