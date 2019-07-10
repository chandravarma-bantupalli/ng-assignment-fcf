import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoringService } from 'src/app/scoring.service';

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
  public cardClickTimeInterval = 1500;
  public gameType = 2;
  gameTimer: any;
  public gameTimeLimit =  12000;
  public isGameOver: boolean;
  public noOfXp: number;
  constructor( private router: Router, private scoringService: ScoringService ) { }

  ngOnInit() {
    this.playTiles = [];
    this.hardness = 4;
    this.score = 0;
    this.misses = 0;
    this.noOfXp = 3;
    this.isGameOver = false;
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
    if (this.isGameActive) {
// tslint:disable-next-line: no-string-literal
      if ((this.selectedCard['cardId'] === cardId) && (this.hasChance === true)) {
        this.score++;
        this.sendScore();
        this.hasChance = false;
        clearInterval(this.cardClickTimer);
        this.pickCard();
        this.cardClickTimer = setInterval(() => {
          this.pickCard();
        }, this.cardClickTimeInterval);
      } else {
        this.misses++;
        this.noOfXp--;
        if (this.misses === 3 || this.noOfXp === 0) {
          this.isGameOver = true;
          this.endGame();
        }
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

  sendScore() {
    this.scoringService.playerScore.next(this.score)
  }

  endGame() {
    clearInterval(this.cardClickTimer);
    this.router.navigate(['/game-over']);
  }

}
