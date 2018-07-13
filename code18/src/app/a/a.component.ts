import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.servicioService.getMensajes().subscribe(
      (data:string)=>{console.log(data)},
      (error)=>{console.log(error)},
      ()=>{console.log('Proceso completado')}
    );
  }

}
