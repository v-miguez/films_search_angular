import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment'
import { Movie } from '../shared/models/Movie.model'

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  basePath: string = environment.basePath

  moviesList: Observable<Movie[]> = new Observable()
  constructor(private http: HttpClient) {}

  private getMoviesRequest(): void {
    this.moviesList = this.http.get<Movie[]>(`${this.basePath}/movies`)
  }

  readMoviesList(): Observable<Movie[]> {
    this.getMoviesRequest()
    return this.moviesList
  }

  postMovie(movie: Movie): void {
    this.http.post<Movie>(`${this.basePath}/movies`, movie).toPromise()
    this.getMoviesRequest()
  }
}
