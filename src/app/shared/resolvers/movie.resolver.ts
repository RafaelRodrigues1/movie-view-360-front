import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { Movie } from '../models/movie';
import { MovieClient } from 'src/app/core/clients/movie.client';
import { lastValueFrom } from 'rxjs';
import { inject } from '@angular/core';

export const MovieResolver: ResolveFn<Movie> = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  movieClient: MovieClient = inject(MovieClient)): Promise<Movie> => {
    const id = route.paramMap.get('id')
    const movie$ = movieClient.getMovieById(Number(id))
    const movie = await lastValueFrom(movie$)
    return movie
  }
