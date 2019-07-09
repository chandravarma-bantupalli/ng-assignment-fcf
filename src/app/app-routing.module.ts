import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GameComponent } from './game-play/game/game.component';
import { GameOverComponent } from './game-play/game-over/game-over.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'game-over', component: GameOverComponent},
  { path: '**', pathMatch: 'prefix', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
