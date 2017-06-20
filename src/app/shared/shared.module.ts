import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BackgroundDirective } from './background.directive';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, BackgroundDirective, InputComponent]
})
export class SharedModule { }
