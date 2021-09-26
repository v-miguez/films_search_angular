import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { Movie } from '../../../../shared/models/Movie.model'

import { FilmCardComponent } from './filmcard.component'

const movieMock: Movie = {
  id: 1,
  title: 'string',
  poster: 'string',
  genre: ['string'],
  year: 2,
  duration: 3,
  imdbRating: 3,
  actors: [2]
}
describe('FilmCardComponent', () => {
  let component: FilmCardComponent
  let fixture: ComponentFixture<FilmCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmCardComponent],
      imports: [RouterTestingModule]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCardComponent)
    component = fixture.componentInstance
    component.movie = movieMock
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
