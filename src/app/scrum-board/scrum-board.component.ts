import { Component, OnInit } from '@angular/core';
import {CardsService} from "../services/cards.service";

@Component({
  selector: 'app-scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})
export class ScrumBoardComponent implements OnInit {

  cards : any[] = [];

  constructor(private cardsService : CardsService) { }

  ngOnInit() {

  }

  // onGetCards() {
  //   this.cardsService.getData().subscribe(
  //     data => this.cards = data
  //   )
  // }

  onGetCards() {
    this.cardsService.getData().subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
          console.log(data[key]);
          myArray.push(data[key].title);
        }
        this.cards = myArray;
      }
    )
  }

}
