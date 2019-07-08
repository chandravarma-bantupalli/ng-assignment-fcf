import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent implements OnInit {

  public playerName: string;
  public score: number;
  constructor() { }

  ngOnInit() {
    this.score = 0;
  }

}
