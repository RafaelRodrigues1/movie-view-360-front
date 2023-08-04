import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Gender } from 'src/app/shared/models/gender';
import { MOCK_GENDERS } from '../movie-list-by-gender/movie-list-by-gender.component';
import { Cast } from 'src/app/shared/models/cast';
import { filter, map, startWith } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('castInput') castInput!: ElementRef<HTMLInputElement>;

  movie: Movie
  isEdit!: boolean

  genders!: Gender[]
  selectedGender!: Gender

  casting!: Cast[]
  selectedCasting: Cast[] = []
  filteredsCasting: Cast[] = []

  basicData: FormGroup = this._formBuilder.group({movieTitle: [''], movieDescription: [''], movieDateRelease: ['']})
  castingGenderData: FormGroup = this._formBuilder.group({movieCasting: [''], movieGender: ['']})
  imageData: FormGroup = this._formBuilder.group({movieImageUrl: ['']})

  constructor(
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
    ) {
    this.isEdit = !!this.activatedRoute.snapshot.data['movie']
    this.movie = this.activatedRoute.snapshot.data['movie']
  }

  ngOnInit(): void {
    if(this.isEdit)
      this.setMovieDetailData()
    this.configFormControls()
    this.genders = MOCK_GENDERS
    this.casting = MOCK_CAST
  }

  setMovieDetailData() {
    this.basicData.controls['movieTitle'].setValue(this.movie?.title)
    this.basicData.controls['movieDescription'].setValue(this.movie?.description)
    this.basicData.controls['movieDateRelease'].setValue(this.movie?.releaseDate)
    this.imageData.controls['movieImageUrl'].setValue(this.movie?.imgUrl)
    this.selectedGender = this.movie?.gender
    this.selectedCasting = this.movie?.casting || []
  }

  allFormsValids(): boolean {
    return this.basicData.invalid || !this.selectedGender
      || this.imageData.invalid || this.selectedCasting.length <= 0
  }

  private configFormControls() {
    this.setValueChanges()
    this.setFormControlsValidators()
  }

  private setValueChanges() {
    this.getMovieCastingFormControl().valueChanges.pipe(
      startWith(null),
      filter(name => !!name && name.length >= 3),
      map(name => (name ? this._filterCasting(name) : [])),
    ).subscribe(result => this.filteredsCasting = result);
  }

  private setFormControlsValidators() {
    this.basicData.addValidators([Validators.required])
    this.castingGenderData.addValidators([Validators.required])
    this.imageData.addValidators([Validators.required])
  }

  selectGender(gender: Gender) {
    this.selectedGender = gender
  }

  removeCast(cast: Cast) {
    if(this.selectedCasting.includes(cast))
      this.selectedCasting.splice(this.selectedCasting.indexOf(cast), 1)
  }

  selectCast(event: MatAutocompleteSelectedEvent) {
    const cast = event.option.value
    if(!this.selectedCasting.filter(castFilter => castFilter.id === cast.id).length)
      this.selectedCasting.push(cast);
    this.castInput.nativeElement.value = '';
    this.getMovieCastingFormControl().setValue(null);
  }

  private _filterCasting(name: string): Cast[] {
    const filterValue = name.toLowerCase();
    return this.casting.filter(cast => cast.name.toLowerCase().includes(filterValue));
  }

  getMovieCastingFormControl(): AbstractControl {
    return this.castingGenderData.controls['movieCasting']
  }

  isSameGender(gender: Gender): boolean {
    return gender.id === this.selectedGender.id
  }

  saveMovie() {
    this.buildMovieForSave()
    console.log(this.movie)
  }

  private buildMovieForSave() {
    const title = this.basicData.controls['movieTitle'].value
    const description = this.basicData.controls['movieDescription'].value
    const releaseDate = this.basicData.controls['movieDateRelease'].value
    const imgUrl = this.imageData.controls['movieImageUrl'].value
    this.movie = {
      title, description, releaseDate, imgUrl, gender: this.selectedGender, casting: this.selectedCasting
    }
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
