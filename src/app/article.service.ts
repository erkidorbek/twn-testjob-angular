import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './types/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrl = 'https://midaiganes.irw.ee/api/list/';

  constructor(private http: HttpClient) { }

  getArticle(articleId: string): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + articleId);
  }
}
