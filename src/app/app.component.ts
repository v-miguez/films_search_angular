import { Component } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebaATSistemas'
  selectLang = 'es'
  constructor(private translocoService: TranslocoService) {
    this.selectLanguage()
  }

  selectLanguage(language: string = this.selectLang): void {
    this.translocoService.setActiveLang(language)
  }
}
