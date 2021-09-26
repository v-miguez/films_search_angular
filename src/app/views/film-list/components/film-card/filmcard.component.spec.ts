import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { FilmCardComponent } from './filmcard.component'

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
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
