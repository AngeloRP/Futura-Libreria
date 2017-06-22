import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BackgroundDirective } from './styles/background/background.directive';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { TableComponent } from './table/table.component';
import { FilterTextService } from './filter-text/filter-text.service';
import { DtInstanceComponent } from './table/tablePrueba.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
  ButtonComponent,
  BackgroundDirective,
  InputComponent,
  SelectComponent,
  FilterTextComponent,
  TableComponent,
  DtInstanceComponent],
  exports: [
    ButtonComponent,
    BackgroundDirective,
    InputComponent,
    SelectComponent,
    FilterTextComponent,
    TableComponent,
    DtInstanceComponent],
  providers:[
    FilterTextService
  ]
})
export class SharedModule { }
