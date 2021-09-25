import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-sidenavelement',
  templateUrl: './sidenavelement.component.html',
  styleUrls: ['./sidenavelement.component.scss']
})
export class SidenavelementComponent {
  @Input() title: string
}
