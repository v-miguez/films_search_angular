import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { Company } from '../shared/models/Company.model'

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  companiesList: Company[] = []
  basePath: string = environment.basePath
  constructor(private http: HttpClient) {}

  readCompaniesList(): Company[] {
    return this.companiesList
  }

  async getAllCompanies(): Promise<void> {
    this.companiesList = await this.http
      .get<Company[]>(`${this.basePath}/companies`)
      .toPromise()
  }

  async getCompaniesById(filmId: number): Promise<Company[]> {
    if (this.companiesList.length == 0) await this.getAllCompanies()
    const companiesArray = []
    this.companiesList.forEach((company) => {
      if (this.companyHasFilm(filmId, company)) companiesArray.push(company)
    })

    return companiesArray
  }

  private companyHasFilm(filmId: number, company: Company): boolean {
    return company.movies.some((e) => filmId == e)
  }
}
