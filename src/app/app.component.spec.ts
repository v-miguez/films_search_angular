import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { getTranslocoModule } from './transloco-testing.module'
import { HeaderComponent } from './components/header/header.component'
import { MaterialModule } from './material.module'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { SidenavelementComponent } from './components/sidenav/components/sidenavelement/sidenavelement.component'
import { provideMockStore } from 'ngrx-mockstore'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    const initialState = { show: false }

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, getTranslocoModule(), MaterialModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        SidenavComponent,
        SidenavelementComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents()
  })
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
