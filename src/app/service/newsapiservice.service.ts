import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = 'd1a47faa223344649b4a8e18e36a4179';
const API_URL = 'https://newsapi.org/v2';

@Injectable({
  providedIn: 'root',
})
export class NewsapiserviceService {
  value: string = '';

  constructor(private _http: HttpClient) {}

  topHeading(url: string): Observable<any> {
    return this._http.get(`${API_URL}/${url}&apiKey=${API_KEY}`, {});
  }
  searchHeading(url: string): Observable<any> {
    return this._http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
  landingNews(url: string): Observable<any> {
    return this._http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}

function topHeading() {
  throw new Error('Function not implemented.');
}
