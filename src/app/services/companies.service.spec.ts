import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { Company } from '../shared/models/Company.model'
import { expectedCompaniesList } from './builders/companies.builder'

import { CompaniesService } from './companies.service'

describe('CompaniesService', () => {
  let service: CompaniesService

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(CompaniesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it(`should return company list`, () => {
    const service: CompaniesService = TestBed.get(CompaniesService)
    const companies: Company[] = service.readCompaniesList()
    expect(companies).toBeInstanceOf(Object)
  })

  it(`should return company by film id`, async () => {
    jest.setTimeout(60000)
    const httpMock = TestBed.get(HttpTestingController)
    const companiesArray = expectedCompaniesList
    const service: CompaniesService = TestBed.get(CompaniesService)
    service.getCompaniesById(2).then((result) => {
      expect(result).toMatchObject({ companiesArray })
    })
    const req = await httpMock.expectOne('http://localhost:3000/companies')
    req.flush(expectedCompaniesList)
  })
})
