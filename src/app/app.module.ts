import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TranslocoRootModule } from './transloco-root.module'
import { MaterialModule } from './material.module'
import { StoreModule } from '@ngrx/store'
import { reducer as menuReducer } from './reducers/menu.reducer'
import { reducer as headerReducer } from './reducers/header.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from './environments/environment'
import { LoadinginterceptorService } from './services/loadinginterceptor.service'
import { SharedModule } from './shared.module'
import { ConstructionComponent } from './views/construction/construction.component'
@NgModule({
  declarations: [AppComponent, ConstructionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    }),
    StoreModule.forRoot({
      showMenu: menuReducer,
      headerProperties: headerReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadinginterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
