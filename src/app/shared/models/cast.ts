import { Movie } from "./movie"

export interface Cast {
  id: number
  name: string
  photoUrl: string
  movies?: Array<Movie>
}
