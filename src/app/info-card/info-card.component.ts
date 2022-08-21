import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit{

  @Input() title: string;
  @Input() released: string;
  @Input() synopsis: string;
  @Input() imageUrl: string;
  @Input() genre: string;

  ngOnInit() {
    console.log(this.imageUrl)
  }
}
