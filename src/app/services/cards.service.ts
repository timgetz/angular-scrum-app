import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Card} from "../shared/card";

@Injectable()
export class CardsService {

  private apiUrl = 'http://localhost:8000/scrumboard/cards/';

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
        let results: Array<Card> = [];
        for (let i = 0; i < data.length; i++) {
          let test = data[i];
          results.push(new Card(data[i].title, '', 1, 1, 1))
        }
        return results;
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
