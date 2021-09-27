import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
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
  imports: [
    MaterialModule,
    TranslocoRootModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    SidenavelementComponent,
    TranslocoRootModule,
    CommonModule,
    HidesidenavDirective,
    SpinnerComponent,
    ReactiveFormsModule,
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule {}
