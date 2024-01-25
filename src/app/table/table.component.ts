import { Component } from '@angular/core';
import { TableService } from '../table.service';
import { TableRow } from '../types/table';
import { CommonModule } from '@angular/common';

const formatIdCodeToDate = (idCode:number) => {
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

  return new Date(Number(yearStart + yearEnd), Number(month) - 1, Number(day), 0, 0, 0, 0);
};

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableRows!: TableRow[];
  errorMessage!: string;

  columns = [
    { accessor: 'firstname', label: 'Eesnimi', sortable: true },
    { accessor: 'surname', label: 'Perenimi', sortable: true },
    {
      accessor: 'sex',
      label: 'Sugu',
      sortable: true,
      format: (value: "f" | "m") => (value === 'f' ? 'Naine' : 'Mees'),
    },
    {
      accessor: 'personal_code',
      label: 'Sünnikuupäev',
      sortable: true,
      format: (idCode: number) => formatIdCodeToDate(idCode).toLocaleDateString('uk-Uk'),
    },
    {
      accessor: 'phone',
      label: 'Telefon',
      format: (value: string) => value.substring(0, 4) + ' ' + value.substring(4),
    },
  ];

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
