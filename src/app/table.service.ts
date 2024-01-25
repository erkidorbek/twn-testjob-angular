import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableResponse, TableRow } from './types/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  apiUrl = "https://midaiganes.irw.ee/api/list?limit=500";

  constructor(private http: HttpClient){}
  
  getTableData(): Observable<TableResponse> {
    return this.http.get<TableResponse>(this.apiUrl);
  }
}
