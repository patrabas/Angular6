import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-detalle-clientes',
  templateUrl: './detalle-clientes.component.html',
  styleUrls: ['./detalle-clientes.component.css']
})
export class DetalleClientesComponent implements OnInit {

  id:string;
  cliente:any;
  constructor(private route: ActivatedRoute, private clientesService: ClientesService) { 
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.cliente = this.clientesService.getCliente(this.id);
  }

}
