import { Component } from '@angular/core';
import { TableService } from '../table.service';
import { TableRow } from '../types/table';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { LoaderComponent } from '../shared/loader.component';
import { PhonePipe } from '../shared/phone.pipe';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, PaginationComponent, LoaderComponent, SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  tableRows!: TableRow[];
  errorMessage!: string;
  openTableRow: string = '';
  sortByColumn: string = 'firstname';
  sortOrder: 'asc' | 'desc' = 'asc';
  pageOfItems!: TableRow[];
  isLoading: boolean = false;

  handleSelectedRow(id: string) {
    this.openTableRow === id
      ? (this.openTableRow = "")
      : (this.openTableRow = id);
  }

  formatIdCodeToDate = (idCode: number) => {
    const code = idCode.toString();
    const yearCode = code.substring(0, 1);
    const day = code.substring(5, 7);
    const month = code.substring(3, 5);
    const yearEnd = code.substring(1, 3);
    let yearStart;

    switch (yearCode) {
      case '1':
      case '2':
        yearStart = '18';
        break;
      case '3':
      case '4':
        yearStart = '19';
        break;
      case '5':
      case '6':
        yearStart = '20';
        break;
      case '7':
      case '8':
        yearStart = '21';
        break;
      default:
        yearStart = '19';
        break;
    }

    return new Date(
      Number(yearStart + yearEnd),
      Number(month) - 1,
      Number(day)
    );
  };

  columns = [
    { accessor: 'firstname', label: 'Eesnimi', sortable: true },
    { accessor: 'surname', label: 'Perenimi', sortable: true },
    { accessor: 'sex', label: 'Sugu', sortable: true },
    { accessor: 'personal_code', label: 'Sünnikuupäev', sortable: true },
    { accessor: 'phone', label: 'Telefon' },
  ];

  onChangePage(pageOfItems: Array<TableRow>) {
    this.pageOfItems = pageOfItems;
  }

  sortBy(columnAccessor: string) {
    this.sortOrder === 'asc' && this.sortByColumn === columnAccessor
      ? (this.sortOrder = 'desc')
      : (this.sortOrder = 'asc');
    this.sortByColumn = columnAccessor;
    this.openTableRow = '';

    this.tableRows = [...this.tableRows].sort((a: any, b: any) => {
      const orderBy = this.sortByColumn;
      const order = this.sortOrder;

      if (orderBy === 'index') {
        if (order === 'asc') {
          return a - b;
        } else {
          return b - a;
        }
      }

      if (orderBy === 'personal_code') {
        const dateA = this.formatIdCodeToDate(a.personal_code).getTime();
        const dateB = this.formatIdCodeToDate(b.personal_code).getTime();

        if (order === 'asc') {
          return dateA > dateB ? 1 : -1;
        } else {
          return dateB > dateA ? 1 : -1;
        }
      }

      if (order === 'asc') {
        return String(a[orderBy])?.localeCompare(String(b[orderBy]), 'et') || 1;
      } else {
        return (
          String(b[orderBy])?.localeCompare(String(a[orderBy]), 'et') || -1
        );
      }
    });
  }

  sortIcon(columnAccessor: string) {
    if (columnAccessor === this.sortByColumn) {
      return this.sortOrder === 'asc' ? '↑' : '↓';
    }
    return '⇅';
  }

  constructor(private table_service: TableService) { }

  ngOnInit() {
    this.isLoading = true;
    this.table_service.getTableData().subscribe({
      next: (tableData) => {
        this.tableRows = tableData.list;
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        this.sortOrder = 'desc';
        this.sortBy('firstname');
        this.isLoading = false;
      },
    });
  }
}
