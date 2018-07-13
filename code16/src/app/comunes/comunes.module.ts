import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaSuaveDirective } from './directivas/carga-suave.directive';

@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [CargaSuaveDirective],
  exports: [CargaSuaveDirective]
})
export class ComunesModule { }
