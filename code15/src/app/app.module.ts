import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { GlosarioDirective } from './directivas/glosario.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    GlosarioDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
