import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { ArticleComponent } from './article/article.component'
import { TableComponent } from './table/table.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ArticleComponent,
    TableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'twn-testjob-angular'
  showToggle = false;

  onToggle() {
    this.showToggle = !this.showToggle;
  }
}
