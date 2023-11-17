import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandsService {

  private apiUrl = 'https://stand-by-me.herokuapp.com/api/v1/stands';
  private queryURL = 'https://stand-by-me.herokuapp.com/api/v1/stands/query/query';
  
  constructor(private http: HttpClient) { }

  getStands(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getStandById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getStandsByQuery(query: any): Observable<any> {
    const url = `${this.queryURL}?${this.serializeQuery(query)}`;
    return this.http.get(url);
  }
  
  private serializeQuery(query: any): string {
    const keys = Object.keys(query);
    const queryParams = keys.map((key) => `${key}=${query[key]}`).join('&');
    return queryParams;
  }

  
}
