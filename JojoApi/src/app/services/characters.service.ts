import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://jojos-bizarre-api.netlify.app/api/v1/characters'; // Corrigindo para o endpoint correto de personagens

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getCharactersByQuery(category: string, query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/query/query?${category}=${query}`);
  }
}

