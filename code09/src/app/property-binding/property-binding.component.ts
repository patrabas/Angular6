import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagen = 'assets/santander_aerea.jpg';
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.imagen = 'assets/santander.jpg';
    }, 3000);
  }

}
