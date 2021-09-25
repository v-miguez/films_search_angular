import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FilmDetailComponent } from './views/film-detail/film-detail.component'
import { FilmListComponent } from './views/film-list/film-list.component'

export const routes: Routes = [
  {
    path: '',
    component: FilmListComponent
  },
  {
    path: 'pelicula/:title',
    component: FilmDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
