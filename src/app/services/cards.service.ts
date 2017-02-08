import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CardsService {

  private apiUrl = 'http://localhost:8000/scrumboard/cards'

  constructor(private http: Http) { }

  public getData() {
    return this.http.get(this.apiUrl)
      .map((response: Response) => response.json());
  }
}
