import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StreamingDataService {

  constructor( private http: HttpClient ) { }

  private baseUrl = 'https://ott-details.p.rapidapi.com/search';
  
  
  private options = {
    headers:  new HttpHeaders({
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': ''
    }),
    params: new HttpParams().set('title', 'space')
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl, this.options)
  }
}
