import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {

  @Input('movie') movie!: Movie

  favoritar() {
    this.movie.isFavorite = !this.movie.isFavorite
  }
}
