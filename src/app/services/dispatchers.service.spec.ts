import { TestBed } from '@angular/core/testing'
import { provideMockStore } from 'ngrx-mockstore'

import { DispatchersService } from './dispatchers.service'

describe('DispatchersService', () => {
  let service: DispatchersService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})]
    })
    service = TestBed.inject(DispatchersService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
