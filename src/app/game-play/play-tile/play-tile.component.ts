import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play-tile',
  templateUrl: './play-tile.component.html',
  styleUrls: ['./play-tile.component.css']
})
export class PlayTileComponent implements OnInit {

  @Input() public cardData;
  @Output() public sendEventToCardHolder = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.sendEventToCardHolder.emit(this.cardData.cardId);
  }

}
