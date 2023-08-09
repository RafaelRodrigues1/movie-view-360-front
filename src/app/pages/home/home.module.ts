import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MovieListByGenderComponent } from '../movie-list-by-gender/movie-list-by-gender.component';
import { GenderResolver } from 'src/app/shared/resolvers/gender.resolver';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full',
    resolve: {
      genders: GenderResolver
    }
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    MovieListByGenderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
