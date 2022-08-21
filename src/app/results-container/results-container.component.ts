import { Component, OnInit, OnDestroy } from '@angular/core';
import { StreamingDataService } from '../services/streaming-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results-container',
  templateUrl: './results-container.component.html',
  styleUrls: ['./results-container.component.css']
})


export class ResultsContainerComponent implements OnInit, OnDestroy{

  constructor(private service: StreamingDataService) {}

  data: any;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.service.currentData.subscribe( data => this.data = data );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
