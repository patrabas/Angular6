import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  hora:string;

  constructor() { }

  ngOnInit() {
  }

  getHora(){
    const h = new Date().getHours();
    const hh = ('0'+h).slice(-2);
    const m = new Date().getMinutes();
    const mm = ('0'+m).slice(-2);
    const s = new Date().getSeconds();
    const ss = ('0'+s).slice(-2);
    this.hora = hh+":"+mm+":"+ss;
  }
}
