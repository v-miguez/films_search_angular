import { Component, OnInit } from '@angular/core'
import { DispatchersService } from '../../services/dispatchers.service'

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  constructor(private dispatcherService: DispatchersService) {}

  ngOnInit(): void {
    this.dispatcherService.setHeaderProperties({
      menuIcon: false,
      title: 'Titulo Película'
    })
  }
}
