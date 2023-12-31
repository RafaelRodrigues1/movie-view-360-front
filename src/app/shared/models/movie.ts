import { Cast, CastRequest } from "./cast"
import { Gender } from "./gender"

export interface Movie {
  id?: number
  title: string
  description: string
  releaseDate: number
  gender: Gender
  imgUrl: string
  favorite?: boolean
  castings?: Cast[]
}

export interface MovieRequest {
  id?: number,
  title: string,
  description: string,
  releaseDate: number,
  genderId: number,
  imgUrl: string,
  castings: CastRequest[]
}
