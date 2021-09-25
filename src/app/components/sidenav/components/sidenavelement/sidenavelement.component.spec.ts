import { ComponentFixture, TestBed } from '@angular/core/testing'
import { getTranslocoModule } from '../../../../transloco-testing.module'
import { MaterialModule } from '../../../../material.module'

import { SidenavelementComponent } from './sidenavelement.component'

describe('SidenavelementComponent', () => {
  let component: SidenavelementComponent
  let fixture: ComponentFixture<SidenavelementComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavelementComponent],
      imports: [MaterialModule, getTranslocoModule()]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavelementComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
