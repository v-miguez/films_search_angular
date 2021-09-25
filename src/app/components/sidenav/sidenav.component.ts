import { Component } from '@angular/core'
import { MenuElement } from '../../shared/models/MenuElement.model'
import { MenuConfiguration } from '../../../assets/MenuConfiguration'
import { AppState } from '../../app.state'
import { Store } from '@ngrx/store'
import * as MenuActions from '../../actions/menu.actions'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  menuList: MenuElement[] = MenuConfiguration
  constructor(private store: Store<AppState>) {}

  hideMenuClick() {
    this.store.dispatch(new MenuActions.HideMenu({ show: false }))
  }
}
