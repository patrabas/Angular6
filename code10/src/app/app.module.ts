import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
