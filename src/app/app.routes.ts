import { Routes } from '@angular/router'
import { ArticleComponent } from './article/article.component'
import { TableComponent } from './table/table.component'

export const routes: Routes = [
  { path: 'article', component: ArticleComponent },
  { path: 'article/:articleId', component: ArticleComponent },
  { path: 'table', component: TableComponent }
]
