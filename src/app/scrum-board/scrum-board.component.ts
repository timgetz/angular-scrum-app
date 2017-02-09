import { Component, OnInit } from '@angular/core';
import {CardsService} from "../services/cards.service";
import {Card} from "../shared/card";

@Component({
  selector: 'sb-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  cards : Array<Card> = [];

  constructor(private cardsService : CardsService) { }

  ngOnInit() {

  }

  onGetCards() {
    this.cardsService.getCards()
      .subscribe(
        result => this.cards = result
      )
  }

  // onGetCards() {
  //   this.cardsService.getCards().subscribe(
  //     data => {
  //       const myArray = [];
  //       for (let key in data) {
  //         console.log(data[key]);
  //         myArray.push(data[key].title);
  //       }
  //       this.cards = myArray;
  //     }
  //   )
  // }

  onAddCard(title: string) {
    this.cardsService.sendData({title: title, list: 2})
      .subscribe(
        data => console.log(data)
      )
  }

}
