import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { ActorsService } from '../../services/actors.service'
import { CompaniesService } from '../../services/companies.service'
import { DispatchersService } from '../../services/dispatchers.service'
import { LoadingService } from '../../services/loadingservice.service'
import { Actor } from '../../shared/models/Actor.model'
import { Company } from '../../shared/models/Company.model'

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  movie
  actors: Actor[] = []
  companies: Company[] = []
  showSpinner: Observable<boolean>
  constructor(
    private dispatcherService: DispatchersService,
    private router: Router,
    private actorService: ActorsService,
    private loadingService: LoadingService,
    private companiesService: CompaniesService
  ) {
    this.movie = this.router.getCurrentNavigation().extras.state
    if (!this.movie) this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.dispatcherService.setHeaderProperties({
      menuIcon: false,
      title: this.movie.title
    })
    this.showSpinner = this.loadingService.isLoading$
    this.getActors()
    this.getCompanies()
  }

  async getActors(): Promise<void> {
    this.actors = await this.actorService.getActorsById(this.movie.actors)
  }

  async getCompanies(): Promise<void> {
    this.companies = await this.companiesService.getCompaniesById(this.movie.id)
  }
}
