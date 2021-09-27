import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from 'ngrx-mockstore'
import { routes } from '../../app-routing.module'
import { AppModule } from '../../app.module'
import { SpinnerComponent } from '../../components/spinner/spinner.component'
import { FilmCardComponent } from '../film-list/components/film-card/filmcard.component'
import { FilmListComponent } from '../film-list/film-list.component'

import { FilmDetailComponent } from './film-detail.component'
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { Router } from '@angular/router'
import { FilmsModule } from '../../films.module'
import { SharedModule } from '../../shared.module'

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          locationId: 'someId',
          locationName: 'someName'
        }
      }
    }
  }
}

describe('FilmDetailComponent', () => {
  let component: FilmDetailComponent
  let fixture: ComponentFixture<FilmDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        FilmsModule,
        SharedModule,
        AppModule
      ],
      providers: [
        provideMockStore({}),
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
