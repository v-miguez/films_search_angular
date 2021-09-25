import { Action } from '@ngrx/store'
import { ShowMenu as ShowMenuModel } from '../shared/models/MenuElement.model'

export const SHOW_MENU = 'Show Menu'
export const HIDE_MENU = 'Hide Menu'

export class ShowMenu implements Action {
  readonly type = SHOW_MENU
  constructor(public payload: ShowMenuModel) {}
}
export class HideMenu implements Action {
  readonly type = HIDE_MENU
  constructor(public payload: ShowMenuModel) {}
}

export type Actions = ShowMenu | HideMenu
