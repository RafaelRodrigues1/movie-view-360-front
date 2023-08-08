import { MovieClient } from 'src/app/core/clients/movie.client';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Gender } from 'src/app/shared/models/gender';
import { MOCK_GENDERS } from '../movie-list-by-gender/movie-list-by-gender.component';
import { Cast, CastRequest } from 'src/app/shared/models/cast';
import { filter, lastValueFrom, map, of, startWith } from 'rxjs';
import { Movie, MovieRequest } from 'src/app/shared/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/shared/models/role';
import { CastingClient } from 'src/app/core/clients/casting.client';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];

  movie: Movie
  movieForsave!: MovieRequest
  isEdit!: boolean

  genders!: Gender[]
  selectedGender!: Gender

  casting!: Cast[]
  selectedActorCasting: Cast[] = []
  selectedDirectorCasting: Cast[] = []
  filteredsActorCasting: Cast[] = []
  filteredsDirectorCasting: Cast[] = []

  basicData: FormGroup = this._formBuilder.group({movieTitle: [''], movieDescription: [''], movieDateRelease: ['']})
  castingGenderData: FormGroup = this._formBuilder.group({movieCastingActors: [''], movieCastingDirectors: [''], movieGender: ['']})
  imageData: FormGroup = this._formBuilder.group({movieImageUrl: ['']})

  constructor(
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private movieClient: MovieClient,
    private castingClient: CastingClient
    ) {
    this.isEdit = !!this.activatedRoute.snapshot.data['movie']
    this.movie = this.activatedRoute.snapshot.data['movie']
    this.movie.id = this.activatedRoute.snapshot.params['id']
    this.genders = this.activatedRoute.snapshot.data['genders']
  }

  ngOnInit(): void {
    if(this.isEdit)
      this.setMovieDetailData()
    this.configFormControls()
  }

  setMovieDetailData() {
    this.basicData.controls['movieTitle'].setValue(this.movie?.title)
    this.basicData.controls['movieDescription'].setValue(this.movie?.description)
    this.basicData.controls['movieDateRelease'].setValue(this.movie?.releaseDate)
    this.imageData.controls['movieImageUrl'].setValue(this.movie?.imgUrl)
    this.selectedGender = this.movie?.gender
    this.selectedActorCasting = this.filterCastingByRole(Role.ACTOR, this.movie?.casting) || []
    this.selectedDirectorCasting = this.filterCastingByRole(Role.DIRECTOR, this.movie?.casting) || []
  }

  allFormsValids(): boolean {
    return this.basicData.invalid || !this.selectedGender
      || this.imageData.invalid || this.selectedActorCasting.length <= 0 || this.selectedDirectorCasting.length <= 0
  }

  selectGender(gender: Gender) {
    this.selectedGender = gender
  }

  removeCast(cast: Cast, casting: Cast[]) {
    if(casting.includes(cast))
      casting.splice(casting.indexOf(cast), 1)
  }

  selectCast(event: MatAutocompleteSelectedEvent, formControl: AbstractControl, castInput: HTMLInputElement, casting: Cast[]) {
    const cast = event.option.value
    if(!casting.filter(castFilter => castFilter.id === cast.id).length)
      casting.push(cast);
    castInput.value = '';
    formControl.setValue(null);
  }

  isSameGender(gender: Gender): boolean {
    return gender?.id === this.selectedGender?.id
  }

  async saveMovie() {
    this.buildMovieForSave()
    const savedMovie$ = this.isEdit ? this.movieClient.updateMovie(this.movieForsave) : this.movieClient.saveMovie(this.movieForsave)
    const savedMovie = await lastValueFrom(savedMovie$)
  }

  private configFormControls() {
    this.setValueChanges(this.castingGenderData.controls['movieCastingActors'], Role.ACTOR)
    this.setValueChanges(this.castingGenderData.controls['movieCastingDirectors'], Role.DIRECTOR)
    this.setFormControlsValidators()
  }

  private setValueChanges(formControl: AbstractControl, role: Role) {
    formControl.valueChanges.pipe(
      startWith(null),
      filter(name => !!name && name.length >= 3),
      map(async name => (name ? await lastValueFrom(this.castingClient.autocomplete(name)) : []))
    ).subscribe(result =>
      result.then(castings =>
        role == Role.ACTOR ? this.filteredsActorCasting = castings : this.filteredsDirectorCasting = castings
      ))
  }

  private setFormControlsValidators() {
    this.basicData.addValidators([Validators.required])
    this.castingGenderData.addValidators([Validators.required])
    this.imageData.addValidators([Validators.required])
  }

  private filterCastingByRole(role: Role, casting?: Cast[]): Cast[] | undefined {
    return casting?.filter(cast => cast.role == role)
  }

  private buildMovieForSave() {
    const title = this.basicData.controls['movieTitle'].value
    const description = this.basicData.controls['movieDescription'].value
    const releaseDate = this.basicData.controls['movieDateRelease'].value
    const imgUrl = this.imageData.controls['movieImageUrl'].value
    this.movieForsave = {
      title, description, releaseDate, imgUrl, genderId: this.selectedGender.id, castings: this.buildCastingForSave()
    }
    this.isEdit ? this.movieForsave.id = this.movie.id : {}
  }

  private buildCastingForSave(): CastRequest[] {
    const casting: CastRequest[] = []
    this.selectedActorCasting.forEach(cast => casting.push({castingId: cast.id, role: Role.ACTOR}))
    this.selectedDirectorCasting.forEach(cast => casting.push({castingId: cast.id, role: Role.DIRECTOR}))
    return casting
  }
}

export const MOCK_CAST: Cast[] = [
  {id: 1, name: 'Leonardo DiCaprio', photoUrl: ''},
  {id: 2, name: 'Ed Murphy', photoUrl: ''},
  {id: 3, name: 'Ben Afleck', photoUrl: ''},
  {id: 4, name: 'Sílvio Santos', photoUrl: ''},
  {id: 5, name: 'Xuxa', photoUrl: ''},
  {id: 6, name: 'Didi', photoUrl: ''},
  {id: 7, name: 'Juliana Paes', photoUrl: ''},
]
