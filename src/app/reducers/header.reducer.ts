import { HeaderProperties } from '../shared/models/Header.model'
import * as HeaderActions from '../actions/header.actions'
import { tassign } from 'tassign'

export function reducer(
  state: HeaderProperties = { menuIcon: true, title: 'Inicio' },
  action: HeaderActions.Actions
) {
  switch (action.type) {
    case HeaderActions.SET_HEADER_PROPERTIES:
      return tassign(state, action.payload)
    default:
      return state
  }
}
