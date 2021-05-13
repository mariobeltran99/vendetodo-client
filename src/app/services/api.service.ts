import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visits } from '../models/visits';
import { Users } from '../models/users';
import { Rating } from '../models/rating';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/api"
  constructor(private http:HttpClient) { }

  getVisits(): Observable<Visits[]>{
    let dir = this.url + "/visitasJson"
    return this.http.get<Visits[]>(dir);
  }
  getUsersDepartments(): Observable<Users[]>{
    let dir = this.url + "/usuariosJson"
    return this.http.get<Users[]>(dir);
  }
  getProductsRating():Observable<Rating[]>{
    let dir = this.url + "/valoracionesJson"
    return this.http.get<Rating[]>(dir);
  }
}
