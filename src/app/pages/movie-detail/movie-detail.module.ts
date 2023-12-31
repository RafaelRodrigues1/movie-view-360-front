import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MovieResolver } from 'src/app/shared/resolvers/movie.resolver';
import { GenderResolver } from 'src/app/shared/resolvers/gender.resolver';

const routes: Route[] = [
  {
    path: 'movie-detail',
    component: MovieDetailComponent,
    resolve: {
      genders: GenderResolver
    }
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailComponent,
    resolve: {
      movie: MovieResolver,
      genders: GenderResolver
    }
  }
]

@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class MovieDetailModule { }
