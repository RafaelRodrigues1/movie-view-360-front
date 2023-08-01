import { Component } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.less']
})
export class CardCarouselComponent {

  movies: Array<Movie> = [
    {
      id: 1,
      title: 'O chamado',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://onlineseries.com.br/wp-content/uploads/2022/01/cropped-O-Chamado-Samara-Morgan-hoje.jpg',
      isFavorite: true
    },
    {
      id: 2,
      title: 'Quarteto Fantástico',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://br.web.img2.acsta.net/medias/nmedia/18/93/01/84/20230847.jpg',
      isFavorite: false
    },
    {
      id: 3,
      title: 'Corra!',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8f647267258355867625f2f6a11621359bd81662bd4252e370ab28d30ad15a91._RI_TTW_.jpg',
      isFavorite: true
    },
    {
      id: 1,
      title: 'Não! Não olhe!',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://oapolo.com.br/wp-content/uploads/2022/08/nao-nao-olhe-poster.jpeg',
      isFavorite: true
    },
    {
      id: 1,
      title: 'Fragmentado',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://br.web.img2.acsta.net/pictures/17/02/24/16/32/482058.jpg',
      isFavorite: true
    },
    {
      id: 1,
      title: 'Desculpe te incomodar',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://fullerstudio.fuller.edu/wp-content/uploads/2018/08/sorry_to_bother_you_poster.jpg',
      isFavorite: true
    },
    {
      id: 1,
      title: 'Green book',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://br.web.img2.acsta.net/pictures/18/08/15/13/09/1891759.jpg',
      isFavorite: true
    },
    {
      id: 1,
      title: 'Beethoven',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/7/77/Beethoven_filme.jpg',
      isFavorite: true
    },
    {
      id: 1,
      title: 'Doze É Demais',
      description: '',
      releaseDate: 2004,
      gender: {id: 1, description: 'Terror'},
      imgUrl: 'https://br.web.img2.acsta.net/pictures/210/258/21025838_20130808185702588.jpg',
      isFavorite: true
    }
  ]

  responsiveOptions = [
    {
      breakpoint: '1750px',
      numVisible: 8,
      numScroll: 1
    },
    {
      breakpoint: '1600px',
      numVisible: 7,
      numScroll: 1
    },
    {
      breakpoint: '1450px',
      numVisible: 6,
      numScroll: 1
    },
    {
      breakpoint: '1300px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '1150px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1000px',
      numVisible: 3,
      numScroll: 1
    }
];
}
