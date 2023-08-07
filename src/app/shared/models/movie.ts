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
  casting?: Cast[]
}

export interface MovieRequest {
      title: string,
      description: string,
      releaseDate: number,
      genderId: number,
      imgUrl: string,
      castings: CastRequest[]
}
