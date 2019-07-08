import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public tiles = [1, 2, 3, 4];
  constructor() { }

  ngOnInit() {
  }

}
