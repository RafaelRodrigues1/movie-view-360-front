import { Gender } from "./gender"

export interface Movie {
  id: number
  title: string
  description: string
  releaseDate: number
  gender: Gender
  imgUrl: string
  isFavorite?: boolean
}
