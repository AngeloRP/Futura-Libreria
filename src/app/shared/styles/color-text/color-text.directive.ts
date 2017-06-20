import { Directive, OnChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorText]'
})
export class ColorTextDirective {

  @Input('appColorText') color: string;
  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.el.nativeElement.style.color = this.color || 'yellow';
  }

}
