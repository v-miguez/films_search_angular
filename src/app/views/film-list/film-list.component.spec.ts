import { APP_BASE_HREF } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from 'ngrx-mockstore'
import { routes } from '../../app-routing.module'
import { AppModule } from '../../app.module'
import { FilmListComponent } from './film-list.component'

describe('FilmListComponent', () => {
  let component: FilmListComponent
  let fixture: ComponentFixture<FilmListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule.withRoutes(routes), AppModule],
      providers: [
        provideMockStore({}),
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
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
