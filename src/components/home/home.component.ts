import { Component, OnInit } from '@angular/core';
import { allAlgoList } from 'src/constants/algolist.service';
import { algorithms } from 'src/constants/algorithms.service';
import { algoModel } from 'src/models/algo.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedAlgoId = 1;
  allAlgoList: algoModel[] = allAlgoList;

  constructor(private algo: algorithms) {}

  ngOnInit(): void {}

  algoSelected(algo: algoModel) {
    this.selectedAlgoId = algo.id;
    this.algo.selectedAlgo.next(algo.id);
  }
}
