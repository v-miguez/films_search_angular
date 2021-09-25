import { Component } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from './app.state'
import { ShowMenu } from './shared/models/MenuElement.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebaATSistemas'
  selectLang = 'es'
  public show: Observable<ShowMenu>

  constructor(
    private translocoService: TranslocoService,
    private store: Store<AppState>
  ) {
    this.selectLanguage()
    this.show = this.store.select('showMenu')
    this.store.select('showMenu').subscribe((e) => console.log(e))
  }

  selectLanguage(language: string = this.selectLang): void {
    this.translocoService.setActiveLang(language)
  }
}
