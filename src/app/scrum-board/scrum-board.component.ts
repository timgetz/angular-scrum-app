import { Component, OnInit } from '@angular/core';
import {CardsService} from "../services/cards.service";
import {CardList} from "../shared/card-list";

@Component({
  selector: 'sb-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  cardLists : Array<CardList> = [];

  constructor(private cardsService : CardsService) { }

  ngOnInit() {

  }

  onGetCards() {
    this.cardsService.getCards()
      .subscribe(
        result => this.cardLists = result
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
