import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import * as MenuActions from '../actions/menu.actions'
import * as HeaderActions from '../actions/header.actions'
import { AppState } from '../app.state'
import { HeaderProperties } from '../shared/models/Header.model'

@Injectable({
  providedIn: 'root'
})
export class DispatchersService {
  constructor(private store: Store<AppState>) {}

  toggleSidenav(newValue: boolean) {
    newValue
      ? this.store.dispatch(new MenuActions.ShowMenu({ show: newValue }))
      : this.store.dispatch(new MenuActions.HideMenu({ show: newValue }))
  }

  setHeaderProperties(newValue: HeaderProperties) {
    this.store.dispatch(new HeaderActions.SetHeaderProperties({ ...newValue }))
  }
}
