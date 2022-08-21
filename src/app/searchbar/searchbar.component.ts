import { Component, OnInit } from '@angular/core';
import { StreamingDataService } from '../services/streaming-data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  constructor(private service: StreamingDataService) { }

  data: any;

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.data = this.service.getData();   
  }
}
