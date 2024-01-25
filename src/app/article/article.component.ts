import { Component, ViewEncapsulation } from '@angular/core'
import { Article } from '../types/article'
import { TwnImageComponent } from '../twn-image/twn-image.component'
import { ArticleService } from '../article.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [TwnImageComponent, CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  article: Article | undefined;
  errorMessage!: string;

  constructor(private article_service: ArticleService) {}

  ngOnInit() {
    this.article_service.getArticle().subscribe({
      next: (article) => {
        this.article = article;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }
}
