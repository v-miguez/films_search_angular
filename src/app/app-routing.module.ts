import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConstructionComponent } from './views/construction/construction.component'
import { FilmDetailComponent } from './views/film-detail/film-detail.component'
import { FilmListComponent } from './views/film-list/film-list.component'

export const routes: Routes = [
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
  {
    path: 'peliculas',
    loadChildren: () => import('./films.module').then((m) => m.FilmsModule)
  },
  {
    path: 'actores',
    component: ConstructionComponent
  },
  {
    path: 'estudios',
    component: ConstructionComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
