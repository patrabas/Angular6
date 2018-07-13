import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<any> = [
    {id: '1', nombre: 'Iberdrola', cif: 'A123456'},
    {id: '2', nombre: 'Vodafone', cif: 'A654321'},
    {id: '3', nombre: 'Gas Natural', cif: 'A789987'}
  ];
  constructor() { }

  getClientes(){
    return this.clientes;
  }
  getCliente(id){
    const clienteSel = this.clientes.find(cliente => {      
        return cliente.id === id;
    })
    return clienteSel;
  }
}
