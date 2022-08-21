import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamingDataService {

  constructor( private http: HttpClient ) { }

  private baseUrl = 'https://ott-details.p.rapidapi.com/search';
  

  getQueryResults(query: string): Observable<any> {

    const options = {
      headers:  new HttpHeaders({
        'X-RapidAPI-Key': '13162000e7msh5b1718f8153de6dp13a804jsn20a9efafab4f',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }),
      params: new HttpParams().set('title', query)
    };

    return this.http.get<any>(this.baseUrl, options);
  }
}
