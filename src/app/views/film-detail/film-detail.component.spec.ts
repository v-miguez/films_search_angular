import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from 'ngrx-mockstore'
import { routes } from '../../app-routing.module'
import { FilmListComponent } from '../film-list/film-list.component'

import { FilmDetailComponent } from './film-detail.component'

describe('FilmDetailComponent', () => {
  let component: FilmDetailComponent
  let fixture: ComponentFixture<FilmDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmListComponent, FilmDetailComponent],
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
