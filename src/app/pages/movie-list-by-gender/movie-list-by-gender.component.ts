import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieClient } from 'src/app/core/clients/movie.client';
import { Gender } from 'src/app/shared/models/gender';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-list-by-gender',
  templateUrl: './movie-list-by-gender.component.html',
  styleUrls: ['./movie-list-by-gender.component.less']
})
export class MovieListByGenderComponent implements OnInit {

  moviesByGender: Map<Gender, Movie[]> = new Map()
  genders!: Gender[]
  movies: Movie[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieClient: MovieClient
    ) {
    this.genders = this.genders = this.activatedRoute.snapshot.data['genders']
  }

  ngOnInit() {
    this.genders.map(async gender => {
      this.movieClient.getMoviesByGender(gender.id)
        .subscribe(result => {
          result ? this.movies.push(...result) :
          this.populateMovieByGenders()
        })
    })
  }

  private populateMovieByGenders() {
    this.setGenderKeys()
  }

  private setGenderKeys() {
    this.genders.forEach(gender => this.moviesByGender.set(gender, this.setMovieValues(gender)))
  }

  private setMovieValues(gender: Gender) {
    return this.movies.filter(movie => movie.gender.id === gender.id)
  }

  getMoviesByGenderKeys(): Gender[] {
    return Array.from(this.moviesByGender.keys())
  }

  getMoviesByGenderValues(gender: Gender): Movie[] {
    return this.moviesByGender.get(gender)!
  }
}
