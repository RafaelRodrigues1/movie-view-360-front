import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { Movie } from '../models/movie';

export const MovieResolver: ResolveFn<Movie> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Movie => {
    const id = route.paramMap.get('id')
    return {
      id: 1,
      title: 'O chamado',
      description: 'Descrição, filme de terror Descrição, filme de terror Descrição, filme de terror',
      releaseDate: 2004,
      gender: {id: 2, description: 'Terror'},
      imgUrl: 'https://onlineseries.com.br/wp-content/uploads/2022/01/cropped-O-Chamado-Samara-Morgan-hoje.jpg',
      isFavorite: true,
      casting: [
        {id: 4, name: 'Sílvio Santos', photoUrl: ''},
        {id: 6, name: 'Didi', photoUrl: ''},
        {id: 7, name: 'Juliana Paes', photoUrl: ''}
      ]
    }
  }
