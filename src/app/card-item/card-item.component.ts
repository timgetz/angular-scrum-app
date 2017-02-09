import {Component, OnInit, Input} from '@angular/core';
import {Card} from "../shared/card";

@Component({
  selector: 'sb-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  constructor() { }

  @Input() card: Card;
  @Input() cardId: number;

  ngOnInit() {
  }

}
