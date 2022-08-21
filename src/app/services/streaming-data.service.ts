import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreamingDataService {

  constructor() { }

  getData(): number [] {
    return [1,2,3,4]
  }
}
