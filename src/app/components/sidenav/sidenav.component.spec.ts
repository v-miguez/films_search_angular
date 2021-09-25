import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SidenavComponent } from './sidenav.component'
import { getTranslocoModule } from '../../transloco-testing.module'
import { MaterialModule } from '../../material.module'
import { SidenavelementComponent } from './components/sidenavelement/sidenavelement.component'
import { provideMockStore } from 'ngrx-mockstore'
import { RouterTestingModule } from '@angular/router/testing'
import { routes } from '../../app-routing.module'
import { AppModule } from '../../app.module'

describe('SidenavComponent', () => {
  let component: SidenavComponent
  let fixture: ComponentFixture<SidenavComponent>

  beforeEach(async () => {
    const initialState = { show: false }
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AppModule,
        getTranslocoModule(),
        MaterialModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
