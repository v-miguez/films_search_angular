import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { Actor } from '../shared/models/Actor.model'

import { ActorsService } from './actors.service'
import { expectedActorsList } from './builders/actors.builder'

describe('ActorsService', () => {
  let service: ActorsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
    service = TestBed.inject(ActorsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it(`should return actors list observable`, () => {
    const service: ActorsService = TestBed.get(ActorsService)
    const actors: Observable<Actor[]> = service.readActorsList()
    expect(actors).toBeInstanceOf(Observable)
  })

  it(`should call actors api `, async () => {
    const service: ActorsService = TestBed.get(ActorsService)
    service.getAllActors()
    service
      .readActorsList()
      .subscribe((result) => expect(result).toMatchObject(expectedActorsList))
    const httpMock = TestBed.get(HttpTestingController)
    const req = httpMock.expectOne('http://localhost:3000/actors')
    req.flush(expectedActorsList)
    httpMock.verify()
  })
})
