import { Component, ViewEncapsulation } from '@angular/core'
import { Article } from '../types/article'
import { TwnImageComponent } from '../twn-image/twn-image.component'
import { ArticleService } from '../article.service'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'

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
  articleId: string = '972d2b8a';

  constructor(private article_service: ArticleService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('articleId') || this.articleId;

    this.article_service.getArticle(this.articleId).subscribe({
      next: (article) => {
        this.article = article;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }
}
