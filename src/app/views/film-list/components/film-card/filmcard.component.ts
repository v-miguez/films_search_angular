import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Movie } from '../../../../shared/models/Movie.model'

@Component({
  selector: 'app-filmcard',
  templateUrl: './filmcard.component.html',
  styleUrls: ['./filmcard.component.scss']
})
export class FilmCardComponent {
  @Input() movie: Movie

  constructor(private router: Router) {}

  navigate(movie: Movie): void {
    this.router.navigate([`/peliculas/${movie.title}`], {
      state: { ...movie }
    })
  }
}
