import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() data: string;
  @Output() derp = new EventEmitter<string>();
  selectedValue = null;
  _data: any[];
  constructor() {


  }

  ngOnInit() {
    console.log(this.data);
    this._data = JSON.parse(this.data);
    console.log( this._data);
  }

  onChange(value: any) {
    console.warn(value);
    console.log(value);

    this.derp.emit(value);
  }

}
