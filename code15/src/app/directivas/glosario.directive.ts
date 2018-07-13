import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appGlosario]'
})
export class GlosarioDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseover') onOver(){
    const span = this.elementRef.nativeElement.querySelector('span');
    this.renderer2.addClass(span,'activa');
  }
  @HostListener('mouseout') onOut(){
    const span = this.elementRef.nativeElement.querySelector('span');
    this.renderer2.removeClass(span,'activa');
  }
}
