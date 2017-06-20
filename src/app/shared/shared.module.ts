import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BackgroundDirective } from './styles/background/background.directive';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ButtonComponent, BackgroundDirective, InputComponent, SelectComponent],
  exports: [ButtonComponent, BackgroundDirective, InputComponent, SelectComponent]
})
export class SharedModule { }
