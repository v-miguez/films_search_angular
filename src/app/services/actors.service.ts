import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment'
import { Actor } from '../shared/models/Actor.model'

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  actorList: Observable<Actor[]> = new Observable()
  basePath: string = environment.basePath
  constructor(private http: HttpClient) {}

  readActorsList() {
    return this.actorList
  }

  getAllActors() {
    this.actorList = this.http.get<Actor[]>(`${this.basePath}/actors`)
  }

  getActorsById(idsArray: number[]): Promise<Actor[]> {
    const promisesArray = idsArray.map((id) =>
      this.http.get<Actor>(`${this.basePath}/actors/${id}`).toPromise()
    )

    return Promise.all(promisesArray)
  }
}
