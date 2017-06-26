import { Component, OnInit, Input } from '@angular/core';
import { FilterTextService } from '../filter-text/filter-text.service';
import { OrderColumnService } from '../order-column.service';

enum headers {
  id = 0,
  firstName = 1,
  lastName = 2,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() table: any = { headers: [], data: [] };
  sort: number = 1;
  row: any;
  filteredData: any[];
  @Input() url: string;
  private buscador: number[] = [];
  constructor(
    private filterService: FilterTextService,
    private orderService: OrderColumnService) { }

  ngOnInit() {
    this.row = [
      { type: 0, data: 'My label' },
      { type: 1, data: 'Modificame', },
      { type: 2, data: [{ value: 0, text: 'Texto 1' }, { value: 1, text: 'Texto 2' }] },
      //{ type: Types.button, data: { type: ButtonTypes.imagen, data: 'imagen' } },
      { type: 3, data: { type: 1, data: 'Click' } }
    ];
    this.table.headers = ['id', 'FirstName', 'LastName'];
    this.table.data = [
      [
        { type: 0, data: 'My label' },
        { type: 1, data: 'Modificame', },
        { type: 2, data: [{ value: 0, text: 'Texto 1' }, { value: 1, text: 'Texto 2' }] },
        { type: 3, data: { type: 1, data: 'Click' } }
      ],
      [
        { type: 0, data: 'Label' },
        { type: 1, data: 'Texto', },
        { type: 2, data: [{ value: 0, text: 'Texto 1' }, { value: 1, text: 'Texto 2' }] },
        { type: 3, data: { type: 1, data: 'Click' } }
      ],
      [
        { type: 0, data: 'Otro Label' },
        { type: 1, data: 'Modificame', },
        { type: 2, data: [{ value: 0, text: 'Texto 1' }, { value: 1, text: 'Texto 2' }] },
        { type: 3, data: { type: 1, data: 'Click' } }
      ],
      [
        { type: 0, data: 'Input dissabled' },
        { type: 1, data: 'Modificame', },
        { type: 2, data: [{ value: 0, text: 'Texto 1' }, { value: 1, text: 'Texto 2' }] },
        { type: 3, data: { type: 1, data: 'Click' } }
      ]
    ];
    this.filteredData = this.table.data;
    this.generarParams();
    //console.log(this.buscador);
  }

  generarParams() {
    for (let i = 0; i < this.table.headers.length; i++) {
      this.buscador[i] = i;
    }
  }

  filterChanged(searchText: string) {
    this.filteredData = this.filterService.filter(searchText, this.buscador, this.table.data);
    console.log(this.filteredData);
    /*this.searchText = searchText;
    console.log('Nuevo Search Text');
    console.log(searchText);
    this.filteredData = this.filteredData;*/

  }

  ordenar(index: number) {
    this.filteredData = this.orderService.orderColumn(index, this.buscador, this.filteredData, this.sort);
    this.sort = this.sort * -1;
  }



}
