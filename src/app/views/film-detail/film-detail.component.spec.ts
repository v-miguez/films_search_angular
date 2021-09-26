import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from 'ngrx-mockstore'
import { routes } from '../../app-routing.module'
import { AppModule } from '../../app.module'
import { FilmCardComponent } from '../film-list/components/film-card/filmcard.component'
import { FilmListComponent } from '../film-list/film-list.component'

import { FilmDetailComponent } from './film-detail.component'

describe('FilmDetailComponent', () => {
  let component: FilmDetailComponent
  let fixture: ComponentFixture<FilmDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmDetailComponent, FilmListComponent, FilmCardComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [provideMockStore({})]
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
