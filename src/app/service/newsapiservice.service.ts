import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

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
