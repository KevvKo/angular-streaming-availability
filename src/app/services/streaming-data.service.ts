import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamingDataService {

  constructor( private http: HttpClient ) { }

  private baseUrl = 'https://ott-details.p.rapidapi.com/advancedsearch';
  private dataSource = new BehaviorSubject<Array<any>>([]);
  currentData = this.dataSource.asObservable();

  changeData( query: string ): void {

    const options = {
      headers:  new HttpHeaders({
        'X-RapidAPI-Key': '13162000e7msh5b1718f8153de6dp13a804jsn20a9efafab4f',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }),
      params: new HttpParams()
        .set('title', query)
        .set( 'type', 'movie')
        .set('sort', 'latest')
        .set('start_year', '1970')
        .set('end_year', '2022')
        .set('language', 'english')
        .set('min_imdb', '6')
    };

    this.http.get<any>(this.baseUrl, options)
    .subscribe( data => this.dataSource.next(data?.results));
    
  }

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

