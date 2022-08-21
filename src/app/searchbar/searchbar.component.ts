import { Component, OnDestroy, OnInit } from '@angular/core';
import { StreamingDataService } from '../services/streaming-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit, OnDestroy {
  
  constructor(private service: StreamingDataService) { }

  data: any;
  subscription: Subscription;

  queryValue = '';

  ngOnInit() {
    this.subscription = this.service.currentData.subscribe( data => this.data = data );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleClick(): void {
    this.service.changeData(this.queryValue);
  }

  getData(): void {
    this.service.getQueryResults( this.queryValue )
      .subscribe( data => this.data = data?.results );
  }
}
