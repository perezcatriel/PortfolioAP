import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePersonaDTO, Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private apiUrl = 'http://localhost:8080';

  static create: any;

  constructor(private http: HttpClient) { }

  getAllPersonas() {
    return this.http.get<Persona[]>(`${this.apiUrl}/ver/personas`);
  }

  getPersonaId(id: string) {
    return this.http.get<Persona>(`${this.apiUrl}/ver/{id}`);
  }

  create(dto: CreatePersonaDTO) {
    return this.http.post<Persona>(`${this.apiUrl}/agregar/persona`, dto);
  }
}
