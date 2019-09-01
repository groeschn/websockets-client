import { Component, OnInit } from '@angular/core';
import {TimerInfo} from '../../model/TimerInfo';

@Component({
  selector: 'app-timer-info-home',
  templateUrl: './timer-info-home.component.html',
  styleUrls: ['./timer-info-home.component.scss']
})
export class TimerInfoHomeComponent implements OnInit {

  timerInfos: TimerInfo[] = [
    {
      id: 'abcd',
      name: 'TestTimer1',
      accumulatedMilliseconds: 1000,
      start: null,
    },
    {
      id: 'efgh',
      name: 'TestTimer2',
      accumulatedMilliseconds: 4000,
      start: null,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
