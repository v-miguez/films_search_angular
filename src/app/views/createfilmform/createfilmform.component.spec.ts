import { APP_BASE_HREF } from '@angular/common'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslocoTestingModule } from '@ngneat/transloco'
import { AppModule } from '../../app.module'
import { FilmsModule } from '../../films.module'
import { MaterialModule } from '../../material.module'
import { SharedModule } from '../../shared.module'

import { CreatefilmformComponent } from './createfilmform.component'

describe('CreatefilmformComponent', () => {
  let component: CreatefilmformComponent
  let fixture: ComponentFixture<CreatefilmformComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule, FilmsModule, HttpClientTestingModule, SharedModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefilmformComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
