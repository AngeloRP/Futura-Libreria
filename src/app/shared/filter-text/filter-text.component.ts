import { Component, EventEmitter, Output } from '@angular/core';

import { FilterTextService } from './filter-text.service';

@Component({
  selector: 'app-filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent {

  @Output() changed: EventEmitter<string>;
 
  filter: string;
 
  constructor() {
    this.changed = new EventEmitter<string>();
  }
 
  clear() {
    this.filter = '';
  }
 
  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }

}
