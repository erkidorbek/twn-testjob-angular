import { Component } from '@angular/core';
import { TableService } from '../table.service';
import { TableRow } from '../types/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
tableRows!: TableRow[];
errorMessage!: string;

constructor(private table_service: TableService) {}

  ngOnInit() {

    this.table_service.getTableData().subscribe({
      next: (tableData) => {
        this.tableRows = tableData.list;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }
}
