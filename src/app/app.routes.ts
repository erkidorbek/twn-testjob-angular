import { Routes } from '@angular/router'
import { ArticleComponent } from './article/article.component'
import { TableComponent } from './table/table.component'

export const routes: Routes = [
  { path: 'article', component: ArticleComponent, pathMatch: 'prefix'},
  { path: 'table', component: TableComponent }
]
