import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { TranslocoRootModule } from './transloco-root.module'
import { HeaderComponent } from './components/header/header.component'
import { MaterialModule } from './material.module'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { SidenavelementComponent } from './components/sidenav/components/sidenavelement/sidenavelement.component'
import { StoreModule } from '@ngrx/store'
import { reducer as menuReducer } from './reducers/menu.reducer'
import { reducer as headerReducer } from './reducers/header.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from './environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    SidenavelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    MaterialModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true // Pauses recording actions and state changes when the extension window is not open
    }),
    StoreModule.forRoot({
      showMenu: menuReducer,
      headerProperties: headerReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
