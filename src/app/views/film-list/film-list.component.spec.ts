import { APP_BASE_HREF } from '@angular/common'
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { render } from '@testing-library/angular'
import { screen } from '@testing-library/dom'
import { provideMockStore } from 'ngrx-mockstore'
import { routes } from '../../app-routing.module'
import { AppModule } from '../../app.module'
import { FilmsModule } from '../../films.module'
import { expectedMoviesList } from '../../services/builders/movies.builders'
import { SharedModule } from '../../shared.module'
import { FilmListComponent } from './film-list.component'

describe('FilmListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AppModule,
        RouterTestingModule.withRoutes(routes),
        FilmsModule,
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [
        provideMockStore({}),
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents()
  })

  it('show spinner', async () => {
    await render(FilmListComponent)
    const httpMock = TestBed.get(HttpTestingController)
    const req = httpMock.expectOne('http://localhost:3000/movies')
    req.flush(expectedMoviesList)
    screen.getByTestId('spinner')
  })

  it('show cards when api response', async () => {
    await render(FilmListComponent)
    const httpMock = TestBed.get(HttpTestingController)
    const req = httpMock.expectOne('http://localhost:3000/movies')
    req.flush(expectedMoviesList)
    setTimeout(() => {
      screen.getByTestId('film-card')
    }, 10)
  })
})
