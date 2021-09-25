import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { render, screen } from '@testing-library/angular'
import { getTranslocoModule } from './transloco-testing.module'
import { HeaderComponent } from './components/header/header.component'
import { MaterialModule } from './material.module'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, getTranslocoModule(), MaterialModule],
      declarations: [AppComponent, HeaderComponent]
    }).compileComponents()
  })
  test('should render Header', async () => {
    await render(AppComponent)
    expect(screen.getByText('Inicio'))
  })
})
