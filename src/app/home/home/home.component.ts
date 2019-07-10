import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ScoringService } from '../../scoring.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private scoringService: ScoringService ) { }

  public playerName = '';
  ngOnInit() {
  }

  goToPlay() {
    this.router.navigate(['/game']);
    this.saveName(this.playerName);
  }

  saveName(data) {
    this.scoringService.playerName.next(this.playerName);
  }

}
