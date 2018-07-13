import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = {nombre: 'Patri', rol:'admin'};
  ngOnInit(){
    localStorage.setItem('user', JSON.stringify(this.user));
  } 
}