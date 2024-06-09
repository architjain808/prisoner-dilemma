import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { algorithms } from 'src/constants/algorithms.service';
import { algoModel } from 'src/models/algo.mode';

@Component({
  selector: 'app-fight-graph',
  templateUrl: './fight-graph.component.html',
  styleUrls: ['./fight-graph.component.scss'],
})
export class FightGraphComponent implements OnInit, OnDestroy {
  @Input() selectedAlgoIndex!: any;
  enemyId = 4;
  enemyActionList: boolean[] = [];
  yourActionList: boolean[] = [];
  enemyScore = 0;
  yourScore = 0;
  indexSub!: Subscription;
  constructor(private algos: algorithms) {}

  ngOnInit(): void {
    this.selectedAlgoIndex;
    // this.fightFuntion();
    this.indexSub = this.algos.selectedAlgo.subscribe((res) => {
      this.enemyActionList = [];
      this.yourActionList = [];
      this.selectedAlgoIndex = res;
      this.fightFuntion();
    });
  }

  getAlgoFn(algoId: number) {
    switch (algoId) {
      case 1: {
        return this.algos.tittatAlgo;
      }
      case 2: {
        return this.algos.angerAlgo;
      }
      case 3: {
        return this.algos.peaceAlgo;
      }
      case 4: {
        return this.algos.randomAlgo;
      }
      default: {
        return this.algos.randomAlgo;
      }
    }
  }

  fightFuntion() {
    const selectedAlgoFn = this.getAlgoFn(this.selectedAlgoIndex);
    const enemyAlgoFn = this.getAlgoFn(this.enemyId);
    for (let i = 0; i < 19; i++) {
      const enemyAction = enemyAlgoFn(
        i,
        this.enemyActionList,
        this.yourActionList
      );
      const yourAction = selectedAlgoFn(
        i,
        this.enemyActionList,
        this.yourActionList
      );

      if (!enemyAction && !yourAction) {
        this.enemyScore++;
        this.yourScore++;
      } else if (!enemyAction && yourAction) {
        this.enemyScore += 5;
      } else if (enemyAction && !yourAction) {
        this.yourScore += 5;
      } else {
        this.enemyScore += 3;
        this.yourScore += 3;
      }

      this.enemyActionList.push(enemyAction);
      this.yourActionList.push(yourAction);
    }

    console.log(this.yourScore);
    console.log(this.enemyScore);
  }

  ngOnDestroy(): void {
    this.indexSub.unsubscribe;
  }
}
