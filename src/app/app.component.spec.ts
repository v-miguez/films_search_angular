import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { getTranslocoModule } from './transloco-testing.module'
import { HeaderComponent } from './components/header/header.component'
import { MaterialModule } from './material.module'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { SidenavelementComponent } from './components/sidenav/components/sidenavelement/sidenavelement.component'
import { provideMockStore } from 'ngrx-mockstore'
import { render } from '@testing-library/angular'
import { screen } from '@testing-library/dom'
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations'
import { AppState } from './app.state'

describe('AppComponent', () => {
  beforeEach(async () => {
    const initialState: AppState = {
      showMenu: { show: true },
      headerProperties: { title: 'Inicio', menuIcon: true }
    }

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        getTranslocoModule(),
        MaterialModule,
        NoopAnimationsModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        SidenavComponent,
        SidenavelementComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents()
  })

  it('it should render sidenav', async () => {
    await render(AppComponent)
    screen.getByText('Menú')
  })

  it('it should render header', async () => {
    await render(AppComponent)
    screen.getByText('Inicio')
  })
})
