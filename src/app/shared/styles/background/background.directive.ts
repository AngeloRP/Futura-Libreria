import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective {
  @Input('appBackground') color: string;
  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
  }

}
