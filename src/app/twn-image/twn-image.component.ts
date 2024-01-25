import { Component, Injectable, Input } from '@angular/core';
import { ArticleImage } from '../types/article';

@Component({
  selector: 'app-twn-image',
  standalone: true,
  imports: [],
  templateUrl: './twn-image.component.html',
  styleUrl: './twn-image.component.scss'
})
@Injectable()
export class TwnImageComponent {
  @Input() image?: ArticleImage;
}
