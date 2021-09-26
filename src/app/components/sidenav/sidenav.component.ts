import { Component } from '@angular/core'
import { MenuElement } from '../../shared/models/MenuElement.model'
import { MenuConfiguration } from '../../../assets/MenuConfiguration'
import { AppState } from '../../app.state'
import { Store } from '@ngrx/store'
import { DispatchersService } from '../../services/dispatchers.service'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  menuList: MenuElement[] = MenuConfiguration
  constructor(
    private store: Store<AppState>,
    private dispatcherService: DispatchersService
  ) {}

  hideMenuClick() {
    this.dispatcherService.toggleSidenav(false)
  }
}
