import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { render, screen } from '@testing-library/angular'
import { provideMockStore } from 'ngrx-mockstore'
import { AppState } from '../../app.state'

import { MaterialModule } from '../../material.module'
import { getTranslocoModule } from '../../transloco-testing.module'

import { HeaderComponent } from './header.component'
let store: Store<AppState>
let fixture: ComponentFixture<HeaderComponent>
let component
describe('HeaderComponent', () => {
  const initialState: AppState = {
    headerProperties: { menuIcon: false, title: 'Inicio' },
    showMenu: { show: false }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MaterialModule, getTranslocoModule()],
      providers: [provideMockStore({ initialState })]
    }).compileComponents()
  })
  afterEach(() => {
    TestBed.resetTestingModule()
  })

  it('should render Inicio', async () => {
    await render(HeaderComponent)
    expect(screen.getByText('Inicio'))
  })
})
