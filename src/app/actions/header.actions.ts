import { Action } from '@ngrx/store'
import { ShowMenuIcon as ShowMenuIconModel } from '../shared/models/Header.model'

export const SHOW_MENU_ICON = 'Show Menu Icon'
export const HIDE_MENU_ICON = 'Hide Menu Icon'

export class ShowMenuIcon implements Action {
  readonly type = SHOW_MENU_ICON
  constructor(public payload: ShowMenuIconModel) {}
}
export class HideMenuIcon implements Action {
  readonly type = HIDE_MENU_ICON
  constructor(public payload: ShowMenuIconModel) {}
}

export type Actions = ShowMenuIcon | HideMenuIcon
