import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Output() change = new EventEmitter<string>();

  valueInput: string = '';
  constructor() { }

  ngOnInit() {
  }

  onChange() {
      console.log('Entro a OnChange');
      this.change.emit(this.valueInput);
  }

}
