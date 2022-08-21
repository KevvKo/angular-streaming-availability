import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {

  @Input() title: string;
  @Input() released: string;
  @Input() synopsis: string;
  @Input() imageUrl: string;
  @Input() genre: string;

}
