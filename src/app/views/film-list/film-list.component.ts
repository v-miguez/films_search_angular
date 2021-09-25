import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DispatchersService } from '../../services/dispatchers.service'

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  constructor(
    private dispatcherService: DispatchersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dispatcherService.setHeaderProperties({
      menuIcon: true,
      title: 'Peliculas'
    })
  }

  navigate() {
    this.router.navigate(['/pelicula/titanic'])
  }
}
