import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
  name: string = '';
  //data: Data[] = [new Data(1, 'Primero'), { id: 2, name: 'Segundo' }];
  data: any[] = [{ id: 1, name: 'Primero' }, { id: 2, name: 'Segundo' }];
  json: string;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.json = JSON.stringify(this.data);
    console.log(JSON.stringify(this.data));
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
