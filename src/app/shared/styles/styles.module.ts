import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './background/background.directive';
import { ColorTextDirective } from './color-text/color-text.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BackgroundDirective, ColorTextDirective],
  exports: [
    BackgroundDirective, ColorTextDirective
  ]
})
export class StylesModule { }
