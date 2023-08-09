import { Movie, MovieRequest } from "src/app/shared/models/movie";
import { HttpClientGeneric } from "./http.client";
import { ClientResource } from "../annotations/client.resource";
import { enviroment } from "src/enviroments/enviroment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
@ClientResource({
  endPoint: enviroment.endPoints.movie
})
export class MovieClient extends HttpClientGeneric<Movie> {

  saveMovie(movie: MovieRequest) {
    return this.post({path: ``, body: movie})
  }

  updateMovie(movie: MovieRequest): Observable<Movie> {
    return this.put({path: `/${movie.id}`, body: movie})
  }

  getMovieById(id: number): Observable<Movie> {
    return this.get({path: `/${id}`})
  }

  getMoviesByGender(genderId: number): Observable<Movie[]> {
    return this.getList({
      path: '/by-gender', parameters: `?categoryId=${genderId}`
    })
  }
}
