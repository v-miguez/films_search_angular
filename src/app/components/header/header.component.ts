import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../app.state'
import * as MenuActions from '../../actions/menu.actions'
import { ShowMenuIcon } from '../../shared/models/Header.model'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle = 'Inicio'
  showMenu = true
  public showMenuIcon: Observable<ShowMenuIcon>

  constructor(private store: Store<AppState>) {
    this.showMenuIcon = this.store.select('showMenuIcon')
    this.showMenuIcon.subscribe(e => console.log(e))
  }

  showMenuClick() {
    this.store.dispatch(new MenuActions.ShowMenu({ show: true }))
  }
}
