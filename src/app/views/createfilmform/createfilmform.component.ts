import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DATE_FORMATS } from '@angular/material/core'
import { Observable } from 'rxjs'
import { ActorsService } from '../../services/actors.service'
import { CompaniesService } from '../../services/companies.service'
import { DispatchersService } from '../../services/dispatchers.service'
import { FilmsService } from '../../services/films.service'
import { Actor } from '../../shared/models/Actor.model'
import { Company } from '../../shared/models/Company.model'

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY'
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY'
  }
}

@Component({
  selector: 'app-createfilmform',
  templateUrl: './createfilmform.component.html',
  styleUrls: ['./createfilmform.component.scss']
})
export class CreatefilmformComponent implements OnInit {
  form: FormGroup
  selectYear: string
  genresList: string[] = []
  actors: Observable<Actor[]>
  companiesList: Company[]
  actorList: Actor[] = []
  constructor(
    private fb: FormBuilder,
    private actorsService: ActorsService,
    private companiesService: CompaniesService,
    private moviesService: FilmsService,
    private dispatcherService: DispatchersService
  ) {}

  ngOnInit(): void {
    this.dispatcherService.setHeaderProperties({
      menuIcon: false,
      title: 'Crear pelicula'
    })
    this.buildForm()
    this.getCompanies()
    this.getActors()
  }

  getActors(): void {
    this.actors = this.actorsService.readActorsList()
  }

  async getCompanies(): Promise<void> {
    this.companiesList = await this.companiesService.readCompaniesList()
  }

  buildForm(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      poster: ['', Validators.required],
      year: ['', Validators.required],
      duration: ['', Validators.required],
      score: ['', Validators.required],
      company: ['', Validators.required],
      genre: ['']
    })
  }

  chosenYearHandler(ev, input): void {
    const { _d } = ev
    this.selectYear = _d
    input._destroyPopup()
  }

  addGenre(): void {
    this.genresList.push(this.form.value.genre)

    this.form.get('genre').patchValue('')
  }

  deleteGenre(genre: string): void {
    this.genresList.splice(this.genresList.indexOf(genre), 1)
  }

  async addActor(actorId: string): Promise<void> {
    this.actorList.push(await this.findActorById(actorId))
    console.log(this.actorList)
  }

  async findActorById(actorId: string): Promise<Actor> {
    const actorsArray = await this.actors.toPromise()

    return actorsArray.find((actor: Actor) => actor.id.toString() == actorId)
  }

  deleteActor(actor: Actor): void {
    this.actorList.splice(this.actorList.indexOf(actor), 1)
  }

  submitForm(): void {
    const payload = {
      ...this.form.value,
      actors: this.actorList.map((actor) => actor.id)
    }
    payload['genre'] = this.genresList.map((genre) => genre)

    this.moviesService.postMovie(payload)
    this.form.reset()
  }

  isButtonDisabled(): boolean {
    return !(
      this.form.valid &&
      this.actorList.length > 0 &&
      this.genresList.length > 0
    )
  }
}
