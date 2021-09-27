import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { Movie } from '../shared/models/Movie.model'
import { expectedMoviesList } from './builders/movies.builders'

import { FilmsService } from './films.service'

describe('FilmsService', () => {
  let service: FilmsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(FilmsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it(`should return movies list observable`, () => {
    const service: FilmsService = TestBed.get(FilmsService)
    const movies: Observable<Movie[]> = service.readMoviesList()
    expect(movies).toBeInstanceOf(Observable)
  })

  it(`should call api`, () => {
    const service: FilmsService = TestBed.get(FilmsService)
    service
      .readMoviesList()
      .subscribe((result) => expect(result).toMatchObject(expectedMoviesList))
    const httpMock = TestBed.get(HttpTestingController)
    const req = httpMock.expectOne('http://localhost:3000/movies')
    req.flush(expectedMoviesList)
    httpMock.verify()
  })
})
