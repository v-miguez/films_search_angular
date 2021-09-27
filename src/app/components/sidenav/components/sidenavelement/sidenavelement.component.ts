import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { MenuElement } from '../../../../shared/models/MenuElement.model'

@Component({
  selector: 'app-sidenavelement',
  templateUrl: './sidenavelement.component.html',
  styleUrls: ['./sidenavelement.component.scss']
})
export class SidenavelementComponent {
  @Input() elementData: MenuElement

  constructor(private router: Router) {}

  goTo(path: string): void {
    this.router.navigate([path])
  }
}
