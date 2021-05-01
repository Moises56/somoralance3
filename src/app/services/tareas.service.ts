import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Tareas } from '../models/publicaciones'


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private URL = '/api'
  // private URL = 'http://localhost:3000/api'

  tareas : Tareas[];
 
  constructor(private http: HttpClient) { }

  // getTareas(){
  //   return this.http.get<any>(this.URL +  '/tareas');
  // }

  getTareas(){
    return this.http.get<Tareas[]>(this.URL);
  }

  getTareasPrivadas(){
    return this.http.get(this.URL +  '/tareas-privadas');
  }

  
}
