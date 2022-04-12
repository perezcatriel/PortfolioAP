import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<Persona[]>(`http://localhost:8080/ver/personas`);
  }
}
