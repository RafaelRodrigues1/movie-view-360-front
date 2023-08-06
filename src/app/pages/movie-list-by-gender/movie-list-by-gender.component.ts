import { Component, OnInit } from '@angular/core';
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
  movies!: Movie[]

  ngOnInit(): void {
    this.genders = MOCK_GENDERS
    this.movies = MOCK_MOVIES
    this.populateMovieByGenders()
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

export const MOCK_GENDERS: Gender[] = [
  {
    id: 1,
    description: 'Terror'
  },
  {
    id: 2,
    description: 'Ação'
  },
  {
    id: 3,
    description: 'Aventura'
  },
  {
    id: 4,
    description: 'Filme de Cachorro'
  },
  {
    id: 5,
    description: 'Suspense'
  },
  {
    id: 6,
    description: 'Comédia'
  }
]

export const MOCK_MOVIES = [
  {
    id: 1,
    title: 'O chamado',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://onlineseries.com.br/wp-content/uploads/2022/01/cropped-O-Chamado-Samara-Morgan-hoje.jpg',
    favorite: true
  },
  {
    id: 2,
    title: 'Quarteto Fantástico',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://br.web.img2.acsta.net/medias/nmedia/18/93/01/84/20230847.jpg',
    favorite: false
  },
  {
    id: 3,
    title: 'Corra!',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8f647267258355867625f2f6a11621359bd81662bd4252e370ab28d30ad15a91._RI_TTW_.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Tenet',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://br.web.img3.acsta.net/pictures/20/05/19/20/45/1889845.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Esquema de Risco: Operação Fortune',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://infonet.com.br/wp-content/uploads/2023/01/sa1.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Não! Não olhe!',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://oapolo.com.br/wp-content/uploads/2022/08/nao-nao-olhe-poster.jpeg',
    favorite: true
  },
  {
    id: 1,
    title: 'Free Guy - Assumindo o Controle',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://br.web.img2.acsta.net/pictures/21/06/10/20/47/1652456.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'Fragmentado',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://br.web.img2.acsta.net/pictures/17/02/24/16/32/482058.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'Desculpe te incomodar',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://fullerstudio.fuller.edu/wp-content/uploads/2018/08/sorry_to_bother_you_poster.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Green book',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://br.web.img2.acsta.net/pictures/18/08/15/13/09/1891759.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'Beethoven',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/7/77/Beethoven_filme.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'Doze É Demais',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://br.web.img2.acsta.net/pictures/210/258/21025838_20130808185702588.jpg',
    favorite: true
  },




  {
    id: 1,
    title: 'A Casa do Medo - Incidente em Ghostland',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://br.web.img3.acsta.net/pictures/18/10/01/22/50/4079251.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Terrifier',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://cinema10.com.br/upload/filmes/filmes_16644_terrifier-filme.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Cuidado com Quem Chama',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://br.web.img3.acsta.net/c_310_420/pictures/20/10/15/08/19/4745591.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Fim dos Tempos',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://m.media-amazon.com/images/I/91uR1FJ2e7L._AC_UF894,1000_QL80_.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Mundo em Caos',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://br.web.img3.acsta.net/pictures/21/02/19/22/06/1891925.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'A Visita',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://br.web.img3.acsta.net/pictures/15/04/27/19/58/151029.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'M3GAN',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://clube-static.clubegazetadopovo.com.br/portal/wp-content/uploads/2023/01/Meganfilme.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Sorria',
    description: '',
    releaseDate: 2004,
    gender: {id: 1, description: 'Terror'},
    imgUrl: 'https://i0.wp.com/otageek.com.br/wp-content/uploads/2023/03/sorria-paramount.png?fit=720%2C720&ssl=1',
    favorite: true
  }

  ,
  {
    id: 1,
    title: 'A Origem',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Dunkirk',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/0/0b/Dunkirk_p%C3%B4ster.png',
    favorite: true
  },
  {
    id: 1,
    title: 'Infiltrado',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://br.web.img3.acsta.net/pictures/21/06/01/21/29/5026941.jpg',
    favorite: true
  },
  {
    id: 1,
    title: 'Agente Oculto',
    description: '',
    releaseDate: 2004,
    gender: {id: 2, description: 'Ação'},
    imgUrl: 'https://br.web.img3.acsta.net/pictures/22/05/24/16/14/3798761.png',
    favorite: true
  }


  ,
  {
    id: 1,
    title: 'Harry Potter e a Pedra Filosofal',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'O Pacto',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://br.web.img2.acsta.net/pictures/23/02/02/17/22/5750515.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'O Homem do Norte',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://br.web.img3.acsta.net/pictures/22/05/02/18/58/1004817.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'Mundo Estranho',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://br.web.img2.acsta.net/pictures/22/09/22/22/10/5955504.jpg',
    favorite: false
  },
  {
    id: 1,
    title: 'O Grande Truque',
    description: '',
    releaseDate: 2004,
    gender: {id: 3, description: 'Aventura'},
    imgUrl: 'https://media.fstatic.com/mFKGFy3i1GpzIVcYLO_i0KiZj2o=/322x478/smart/filters:format(webp)/media/movies/covers/2017/09/O_Grande_Truque.jpg',
    favorite: false
  }
]
