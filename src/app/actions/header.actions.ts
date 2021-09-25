import { Action } from '@ngrx/store'
import { HeaderProperties } from '../shared/models/Header.model'

export const SET_HEADER_PROPERTIES = 'Show Menu Icon'
export const HIDE_MENU_ICON = 'Hide Menu Icon'

export class SetHeaderProperties implements Action {
  readonly type = SET_HEADER_PROPERTIES
  constructor(public payload: HeaderProperties) {}
}

export type Actions = SetHeaderProperties
