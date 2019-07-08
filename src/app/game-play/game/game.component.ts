import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public playTiles: any[];
  hardness: number;
  score: number;
  misses: number;
  public isGameActive = false;
  public selectedCard = {};
  hasChance: boolean;
  cardClickTimer: any;
  public cardClickTimeInterval = 1000;
  public gameType = 2;
  gameTimer: any;
  public gameTimeLimit =  12000;
  constructor() { }

  ngOnInit() {
    this.playTiles = [];
    this.hardness = 4;
    this.score = 0;
    this.misses = 0;
    this.generatePlayTiles();
    if (this.gameType === 1) {
      this.gameTimer = setTimeout(() => {
      }, this.gameTimeLimit);
    }
    this.cardClickTimer = setInterval(() => {
      this.pickCard();
    }, this.cardClickTimeInterval);
    this.isGameActive = true;
  }

  generatePlayTiles() {
    for (let cardIndex = 1; cardIndex <= this.hardness; cardIndex++) {
      this.playTiles.push({
        cardId: cardIndex,
        isActive: false
      });
    }
  }

  cardClicked(cardId: number) {
    if(this.isGameActive) {
// tslint:disable-next-line: no-string-literal
      if ((this.selectedCard['cardId'] === cardId) && (this.hasChance === true)) {
        this.score++;
        this.hasChance = false;
        clearInterval(this.cardClickTimer);
        this.pickCard();
        this.cardClickTimer = setInterval(() => {
          this.pickCard();
        }, this.cardClickTimeInterval);
      } else {
        this.misses++;
      }
    }
  }

  pickCard() {
    this.selectedCard['isActive'] = false;
    let card = this.playTiles[this.pickRandomCardId()];
    while (card === this.selectedCard) {
      card = this.playTiles[this.pickRandomCardId()];
    }
    this.selectedCard = card;
    this.selectedCard['isActive'] = true;
    this.hasChance = true;
  }

  public pickRandomCardId(): number {
    return Math.floor(Math.random() * this.playTiles.length);
  }

}
