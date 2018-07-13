import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  getMensajes(): Observable<string>{
    const mensajes = Observable.create((observer:Observer<string>)=>{
      setTimeout(() =>{
        observer.next('Primer mensaje');
      },1000);
      setTimeout(() =>{
        observer.next('Segundo mensaje');
      },2000);
      setTimeout(() =>{
        observer.complete();
      },3000);
      setTimeout(() =>{
        observer.error('Mensaje error');
      },3000);
      setTimeout(() =>{
        observer.next('Tercer mensaje');
      },4000);      
    });
    return mensajes;
  }
  getPings(): Observable<any>{
    const mensajes = Observable.create((observer: Observer<string>)=>{
      setInterval(()=>{
        observer.next('ping');
      },1000);
    });
    return mensajes;
  }
}

