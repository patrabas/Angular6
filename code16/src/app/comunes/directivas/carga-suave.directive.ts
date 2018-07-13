import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCargaSuave]'
})
export class CargaSuaveDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(){
    setTimeout(()=>{
      this.renderer2.addClass(this.elementRef.nativeElement,'mostrado');
    },1);
  }
}
