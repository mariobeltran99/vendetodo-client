import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visits } from '../models/visits';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/api/visitasJson"
  constructor(private http:HttpClient) { }
  getVisits(): Observable<Visits[]>{
      return this.http.get<Visits[]>(this.url);
  }
}
