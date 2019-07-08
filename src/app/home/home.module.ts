import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scores/scores.component';

@NgModule({
  declarations: [HomeComponent, ScoresComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ScoresComponent
  ]
})
export class HomeModule { }
