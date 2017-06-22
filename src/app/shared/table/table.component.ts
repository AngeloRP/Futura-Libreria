import { Component, OnInit, Input } from '@angular/core';
import { FilterTextService } from '../filter-text/filter-text.service';
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
  filteredData: any[];
  @Input() url: string;
  private buscador: number[] = [];
  constructor(private filterService: FilterTextService) { }

  ngOnInit() {
    /*this.table.headers = ['id', 'FirstName', 'LastName'];
    this.table.data = [
      [1, 'Angelo', 'Rodas Pacco'],
      [2, 'Christina', 'Ruiz'],
      [3, 'Christina', 'Ruiz 2'],
      [4, 'Christina', 'Ruiz 3']
    ];*/
    this.filteredData = this.table.data;
    this.generarParams();
    console.log(this.buscador);
  }

  generarParams() {
    for (let i = 0; i < this.table.headers.length; i++) {
      this.buscador[i] = i;
    }
  }

  filterChanged(searchText: string) {
    this.filteredData = this.filterService.filter(searchText, this.buscador, this.table.data);
    console.log(this.filteredData);
  }



}
