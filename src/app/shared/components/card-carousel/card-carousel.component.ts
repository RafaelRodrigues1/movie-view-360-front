import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.less']
})
export class CardCarouselComponent implements OnInit {

  @Input('movies') movies!: Array<Movie>

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

  ngOnInit(): void {
  }


}
