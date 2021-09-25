import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from 'ngrx-mockstore'
import { routes } from '../../app-routing.module'
import { FilmDetailComponent } from '../film-detail/film-detail.component'
import { FilmListComponent } from './film-list.component'

describe('FilmListComponent', () => {
  let component: FilmListComponent
  let fixture: ComponentFixture<FilmListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmListComponent, FilmDetailComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [provideMockStore({})]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
