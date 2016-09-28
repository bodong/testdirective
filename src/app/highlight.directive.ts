import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight')
  backgroundColor:string;

  currentColor:string = '#face00';

  constructor(private elementRef:ElementRef, private renderer:Renderer) { 
    // if(this.backgroundColor) {
    //   this.currentColor = this.backgroundColor;
    // }

    
  }

  highlight(color:string) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor',color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.backgroundColor || this.currentColor);
  }

   @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

}
