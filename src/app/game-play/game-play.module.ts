import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';

import { GameComponent } from './game/game.component';
import { GameOverComponent } from './game-over/game-over.component';
import { PlayTileComponent } from './play-tile/play-tile.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { TimerComponent } from './timer/timer.component';
import { XpComponent } from './xp/xp.component';

@NgModule({
  declarations: [
    GameComponent,
    GameOverComponent,
    PlayTileComponent,
    PlayerScoreComponent,
    TimerComponent,
    XpComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    GameComponent,
    GameOverComponent,
    PlayTileComponent,
    PlayerScoreComponent,
    TimerComponent,
    XpComponent
  ]
})
export class GamePlayModule { }
