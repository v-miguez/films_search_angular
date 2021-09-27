import { NgModule } from '@angular/core'
import { SharedModule } from './shared.module'
import { FilmDetailComponent } from './views/film-detail/film-detail.component'
import { FilmCardComponent } from './views/film-list/components/film-card/filmcard.component'
import { FilmListComponent } from './views/film-list/film-list.component'
import { RouterModule, Routes } from '@angular/router'
import { CreatefilmformComponent } from './views/createfilmform/createfilmform.component'
import { MaterialModule } from './material.module'

const routes: Routes = [
  { path: '', component: FilmListComponent, pathMatch: 'full' },
  {
    path: 'crear',
    component: CreatefilmformComponent
  },
  {
    path: ':title',
    component: FilmDetailComponent
  }
]

@NgModule({
  declarations: [
    FilmListComponent,
    FilmDetailComponent,
    FilmCardComponent,
    CreatefilmformComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule]
})
export class FilmsModule {}
