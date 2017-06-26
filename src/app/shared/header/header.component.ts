import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headers: any = [];
  @Input() base: number = 60;
  @Output() orderColumna: EventEmitter<any>;
  width: any = '';
  constructor() {
    this.orderColumna = new EventEmitter<any>();
  }

  ngOnInit() {
    this.headers = [
      { id: 0, name: 'Label' },
      { id: 1, name: 'Input' },
      { id: 2, name: 'Select' },
      { id: 3, name: 'Button' }
    ];
    console.log(this.base);
    console.log(this.headers.length);

    this.width = this.base / this.headers.length + 'em';
    console.log(this.width);

  }

  orderColumn(event: any) {
    //event.preventDefault();
    console.log(event);
    this.orderColumna.emit(event);
    /*for (var index = 0; index < this.headers.length; index++) {
      var element = array[index];
    }*/
  }

}
