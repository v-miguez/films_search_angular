import { ComponentFixture, TestBed } from '@angular/core/testing'
import { getTranslocoModule } from '../../../../transloco-testing.module'

import { SidenavelementComponent } from './sidenavelement.component'
import { routes } from '../../../../app-routing.module'
import { RouterTestingModule } from '@angular/router/testing'
import { AppModule } from '../../../../app.module'
import { MenuElement } from '../../../../shared/models/MenuElement.model'
import { MaterialModule } from '../../../../material.module'

describe('SidenavelementComponent', () => {
  let component: SidenavelementComponent
  let fixture: ComponentFixture<SidenavelementComponent>
  const mockMenuElement: MenuElement = {
    goTo: '',
    title: 'Inicio'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],

      imports: [
        MaterialModule,
        AppModule,
        getTranslocoModule(),
        RouterTestingModule.withRoutes(routes)
      ]
    }).compileComponents()
  })

  beforeEach(async () => {
    fixture = TestBed.createComponent(SidenavelementComponent)
    component = fixture.componentInstance
    component.elementData = mockMenuElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
