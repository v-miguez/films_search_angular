import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SidenavComponent } from './sidenav.component'
import { getTranslocoModule } from '../../transloco-testing.module'
import { MaterialModule } from '../../material.module'
import { SidenavelementComponent } from './components/sidenavelement/sidenavelement.component'
import { provideMockStore } from 'ngrx-mockstore'

describe('SidenavComponent', () => {
  let component: SidenavComponent
  let fixture: ComponentFixture<SidenavComponent>

  beforeEach(async () => {
    const initialState = { show: false }
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent, SidenavelementComponent],
      imports: [getTranslocoModule(), MaterialModule],
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
