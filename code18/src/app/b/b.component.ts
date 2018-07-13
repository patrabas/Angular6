import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit, OnDestroy {
  pings: Subscription;
  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.pings = this.servicioService.getPings().subscribe(
      (data:string)=>{console.log(data)},
      (error)=>{console.log(error)},
      ()=>{console.log('Proceso completado')}
    );
  }
  ngOnDestroy(){
    this.pings.unsubscribe();
  }

}
