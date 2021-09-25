import { ShowMenuIcon } from '../shared/models/Header.model'
import * as HeaderActions from '../actions/header.actions'



export function reducer(
  state: ShowMenuIcon = { show: true },
  action: HeaderActions.Actions
) {
  switch (action.type) {
    case HeaderActions.SHOW_MENU_ICON:
      return [state.show, action.payload]
    default:
      return state.show
  }
}
