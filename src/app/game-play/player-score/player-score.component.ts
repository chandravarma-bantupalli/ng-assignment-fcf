import { Component, OnInit } from '@angular/core';
import { ScoringService } from '../../scoring.service';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent implements OnInit {

  public playerName: string ;
  public score: number;
  constructor(private scoringService: ScoringService) { }

  ngOnInit() {
    this.score = 0;
    this.scoringService.playerName.subscribe(data => this.playerName = data);
    this.scoringService.playerScore.subscribe(data => this.score = data );
  }

}
