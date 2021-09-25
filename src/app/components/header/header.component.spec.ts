import { TestBed } from '@angular/core/testing'
import { render, screen } from '@testing-library/angular'
import { provideMockStore } from 'ngrx-mockstore'

import { MaterialModule } from '../../material.module'
import { getTranslocoModule } from '../../transloco-testing.module'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  const initialState = {
    headerProperties: { menuIcon: false, title: 'Inicio' }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule, getTranslocoModule()],
      providers: [provideMockStore({ initialState })]
    }).compileComponents()
  })

  test('should render Inicio', async () => {
    await render(HeaderComponent)
    expect(screen.getByText('Inicio'))
  })
})
