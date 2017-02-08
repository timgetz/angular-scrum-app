import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import {CardsService} from "./services/cards.service";

@NgModule({
  declarations: [
    AppComponent,
    ScrumBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
