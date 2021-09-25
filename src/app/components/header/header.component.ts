import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../app.state'
import { HeaderProperties } from '../../shared/models/Header.model'
import { Observable } from 'rxjs'
import { DispatchersService } from '../../services/dispatchers.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle = 'Inicio'
  showMenu = true
  public headerProperties: Observable<HeaderProperties>

  constructor(
    private store: Store<AppState>,
    private dispatchersService: DispatchersService,
    private location: Location
  ) {
    this.headerProperties = this.store.select('headerProperties')
  }

  showMenuClick() {
    this.dispatchersService.toggleSidenav(true)
  }

  goBack() {
    this.location.back()
  }
}
