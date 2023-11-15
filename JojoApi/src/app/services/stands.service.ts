import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandsService {

  private apiUrl = 'https://jojos-bizarre-api.netlify.app/api/v1/stands';

  constructor(private http: HttpClient) { }

  getStands(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getStandById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getStandsByQuery(category: string, query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/query/query?${category}=${query}`);
  }
}
