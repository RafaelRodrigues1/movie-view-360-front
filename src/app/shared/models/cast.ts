import { Movie } from "./movie"
import { Role } from "./role"

export interface Cast {
  id: number
  name: string
  photoUrl: string
  movies?: Array<Movie>
  role?: Role
}

export interface CastRequest {
  movieId?: number
  castingId: number,
  role: string
}
