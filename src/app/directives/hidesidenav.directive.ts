import { Directive, HostListener } from '@angular/core'
import { DispatchersService } from '../services/dispatchers.service'

@Directive({
  selector: '[appHidesidenav]'
})
export class HidesidenavDirective {
  @HostListener('click', ['$event']) onClick($event) {
    this.dispatcherService.toggleSidenav(false)
  }
  constructor(private dispatcherService: DispatchersService) {}
}
