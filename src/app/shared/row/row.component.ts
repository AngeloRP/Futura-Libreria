import { Component, OnInit, Input } from '@angular/core';
enum Types {
  label = 0,
  input = 1,
  select = 2,
  button = 3
}

enum ButtonTypes {
  imagen = 0,
  texto = 1
}
@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() row: any[];
  @Input() base: number = 60;
  width: any;
  input_width: any;
  encontrado: boolean = true;
  constructor() { }

  ngOnInit() {
    /*this.row = [
      { type: Types.label, data: 'My label' },
      { type: Types.input, data: 'Modificame', },
      { type: Types.select, data: [{ value: 0, text: 'Texto 1' }, { value: 1, text: 'Texto 2' }] },
      //{ type: Types.button, data: { type: ButtonTypes.imagen, data: 'imagen' } },
      { type: Types.button, data: { type: ButtonTypes.texto, data: 'Click' } }
    ];*/
    console.log('Row');
    console.log(this.row);
    console.log('--------------');

    this.width = this.base / this.row.length + 'em';
    this.input_width = ((this.base * 98) / 100) / this.row.length + 'em';
    //this.mostrar();
  }
/*
  mostrar() {
    if (this.searchText.length > 2) {
      this.buscar(this.searchText.toLowerCase());
    }
  }

  buscar(searchText: string) {
    if (this.row.length > 0) {
      for (let index = 0; index < this.row.length; index++) {
        const element = this.row[index];
        if (element.type !== Types.button) {
          if (element.type === Types.select) {

          } else {
            if (element.toString().toLowerCase().indexOf(searchText) > -1) {
              this.encontrado = true;
              return;
            }
          }
        }
      }
      this.encontrado = false;
    }
  }
*/
}
