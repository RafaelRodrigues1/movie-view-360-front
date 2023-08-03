import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListByGenderComponent } from './movie-list-by-gender.component';

describe('MovieListByGenderComponent', () => {
  let component: MovieListByGenderComponent;
  let fixture: ComponentFixture<MovieListByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListByGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
