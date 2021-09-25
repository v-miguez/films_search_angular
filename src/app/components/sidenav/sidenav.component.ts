import { Component } from '@angular/core'
import { MenuElement } from '../../shared/models/MenuElement.model'
import { MenuConfiguration } from '../../../assets/MenuConfiguration'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent  {
  menuList: MenuElement[] = MenuConfiguration

}
