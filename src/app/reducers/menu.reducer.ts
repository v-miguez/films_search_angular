import { ShowMenu as ShowMenuModel } from '../shared/models/MenuElement.model'
import * as MenuActions from '../actions/menu.actions'
import { tassign } from 'tassign'

export function reducer(
  state: ShowMenuModel = { show: false },
  action: MenuActions.Actions
) {
  switch (action.type) {
    case MenuActions.SHOW_MENU:
      return tassign(state, action.payload)
    case MenuActions.HIDE_MENU:
      return tassign(state, action.payload)
    default:
      return state
  }
}
