import { Component } from '@angular/core';
import { StreamingDataService } from '../services/streaming-data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent {
  
  constructor(private service: StreamingDataService) { }

  data: any;
  queryValue = '';

  handleClick(): void {
    this.getData();
  }

  getData(): void {
    this.service.getQueryResults( this.queryValue )
      .subscribe( data => this.data = data );
  
  }
}
