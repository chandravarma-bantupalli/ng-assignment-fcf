import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  public playerName = new BehaviorSubject('');
  public playerScore = new BehaviorSubject(0);
  constructor() { }

}
