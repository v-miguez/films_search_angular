import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { DispatchersService } from '../../services/dispatchers.service'
import { FilmsService } from '../../services/films.service'
import { LoadingService } from '../../services/loadingservice.service'
import { Movie } from '../../shared/models/Movie.model'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  filmList: Observable<Movie[]>
  showSpinner: Observable<boolean>
  constructor(
    private dispatcherService: DispatchersService,
    private filmsService: FilmsService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.dispatcherService.setHeaderProperties({
      menuIcon: true,
      title: 'Peliculas'
    })
    this.getFilmList()
    this.showSpinner = this.loadingService.isLoading$
  }

  getFilmList(): void {
    this.filmList = this.filmsService.readMoviesList()
  }

  trackByItems(index: number, item: Movie): number {
    return item.id
  }
}
