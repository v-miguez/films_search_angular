import { ShowMenu as ShowMenuModel } from '../shared/models/MenuElement.model'
import * as MenuActions from '../actions/menu.actions'


export function reducer(
  state: ShowMenuModel = { show: false },
  action: MenuActions.Actions
) {
  switch (action.type) {
    case MenuActions.SHOW_MENU:
      return [state.show, action.payload]
    default:
      return state.show
  }
}
