import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { SharedModule } from './shared.module'
import { FilmDetailComponent } from './views/film-detail/film-detail.component'
import { FilmCardComponent } from './views/film-list/components/film-card/filmcard.component'
import { FilmListComponent } from './views/film-list/film-list.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', component: FilmListComponent, pathMatch: 'full' },
  {
    path: ':title',
    component: FilmDetailComponent
  }
]

@NgModule({
  declarations: [FilmListComponent, FilmDetailComponent, FilmCardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsModule {}
