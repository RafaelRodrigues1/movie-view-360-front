import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieViewComponent } from './movie-view.component';
import { Route, RouterModule } from '@angular/router';
import { MovieResolver } from 'src/app/shared/resolvers/movie.resolver';

const routes: Route[] = [
  {
    path: 'view/:id',
    pathMatch: 'full',
    component: MovieViewComponent,
    resolve: {
      movie: MovieResolver
    }
  }
]
@NgModule({
  declarations: [
    MovieViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MovieViewModule { }
