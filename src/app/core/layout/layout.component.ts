import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  name: string = '';
  data: Array<any> = [{ id: 1, name: 'Primero' }, { id: 2, name: 'Segundo' }];
  constructor() { }

  ngOnInit() {

  }

  doSomething() {
    console.log('Hizo algo');
    //this.addName();
    console.log(this.name);
  }

  addName() {
    this.name = 'sss';
  }

}
