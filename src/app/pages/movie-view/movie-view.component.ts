import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.less']
})
export class MovieViewComponent {

  movie!: Movie

  constructor(private activatedRoute: ActivatedRoute) {
    this.movie = this.activatedRoute.snapshot.data['movie']
  }
}
