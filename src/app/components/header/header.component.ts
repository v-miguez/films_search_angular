import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../app.state'
import * as MenuActions from '../../actions/menu.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle = 'Inicio'
  showMenu = true

  constructor(private store: Store<AppState>) {}

  showMenuClick() {
    this.store.dispatch(new MenuActions.ShowMenu({ show: true }))
  }

}
