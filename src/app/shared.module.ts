import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
import { SidenavelementComponent } from './components/sidenav/components/sidenavelement/sidenavelement.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { HidesidenavDirective } from './directives/hidesidenav.directive'
import { MaterialModule } from './material.module'
import { TranslocoRootModule } from './transloco-root.module'

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SidenavelementComponent,
    HidesidenavDirective,
    SpinnerComponent
  ],
  imports: [MaterialModule, TranslocoRootModule, CommonModule],
  exports: [
    HeaderComponent,
    SidenavComponent,
    SidenavelementComponent,
    TranslocoRootModule,
    CommonModule,
    HidesidenavDirective,
    SpinnerComponent
  ]
})
export class SharedModule {}
