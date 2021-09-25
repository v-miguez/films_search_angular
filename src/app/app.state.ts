import { ShowMenuIcon } from './shared/models/Header.model'
import { ShowMenu } from './shared/models/MenuElement.model'

export interface AppState {
  readonly showMenu: ShowMenu
  readonly showMenuIcon: ShowMenuIcon
}
