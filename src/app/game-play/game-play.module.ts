import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [GameComponent, GameOverComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent,
    GameOverComponent
  ]
})
export class GamePlayModule { }
