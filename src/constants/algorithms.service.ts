import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class algorithms {
  selectedAlgo = new BehaviorSubject(1);
  constructor() {}

  angerAlgo(
    currentIteration: number,
    opponentsActions: boolean[],
    yourActions: boolean[]
  ) {
    return false;
  }

  peaceAlgo(
    currentIteration: number,
    opponentsActions: boolean[],
    yourActions: boolean[]
  ) {
    return true;
  }

  randomAlgo(
    currentIteration: number,
    opponentsActions: boolean[],
    yourActions: boolean[]
  ) {
    return Math.random() > 0.5 ? true : false;
  }

  tittatAlgo(
    currentIteration: number,
    opponentsActions: boolean[],
    yourActions: boolean[]
  ) {
    if (currentIteration == 0) {
      return true;
    }
    return opponentsActions[currentIteration - 1];
  }
}
