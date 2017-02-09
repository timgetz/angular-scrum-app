import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Card} from "../shared/card";
import {CardList} from "../shared/card-list";

@Injectable()
export class CardsService {

  private apiUrl = 'http://localhost:8000/scrumboard/lists/';

  constructor(private http: Http) { }

  // public getCards() {
  //   return this.http.get(this.apiUrl)
  //     .map((response: Response) => response.json())
  //     .catch(this.handleError);
  // }

  public getCards() {
    return this.http.get(this.apiUrl)
      .map((response: Response) => { return response.json()})
      .map( data  => {
        let cardLists: Array<CardList> = [];
        for (let li = 0; li < data.length; li++) {
          let cards: Array<Card> = [];

          let tempCards = data[li].cards;

          for (let ci = 0; ci < tempCards.length; ci++) {
            cards.push(new Card(tempCards[ci].title,
              tempCards[ci].description,
              tempCards[ci].businessValue,
              tempCards[ci].listId,
              tempCards[ci].storyPoints))
          }

          cardLists.push(new CardList(data[li].name, cards));
        }

        return cardLists;
      })
      .catch(this.handleError);
  }

  public sendData(card: any) {
    const body = JSON.stringify(card);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.apiUrl, body, {
      headers: headers
    })
      .map((data: Response) => data.json);
  }


  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }
}
