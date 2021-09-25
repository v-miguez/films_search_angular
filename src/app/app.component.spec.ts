import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { render, screen } from '@testing-library/angular'
import { getTranslocoModule } from './transloco-testing.module'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, getTranslocoModule()],
      declarations: [AppComponent]
    }).compileComponents()
  })
  test('should render Hola', async () => {
    await render(AppComponent)
    expect(screen.getByText('Hola'))
  })
})
