import { Component, OnInit } from '@angular/core';
import {TimerInfo} from '../../model/TimerInfo';
import {Observable, of} from 'rxjs';
import {TimerInfoMessage} from '../../model/TimerInfoMessage';
import {TimerInfoMessageAction} from '../../model/TimerInfoMessageAction';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-timer-info-home',
  templateUrl: './timer-info-home.component.html',
  styleUrls: ['./timer-info-home.component.scss']
})
export class TimerInfoHomeComponent implements OnInit {

  timerInfoMessage$: Observable<TimerInfoMessage> = of({
    action: TimerInfoMessageAction.LIST,
    timerInfos: [
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
      {
        id: 'ijkl',
        name: 'TestTimer3',
        accumulatedMilliseconds: 4000,
        start: null,
      },
      {
        id: 'mnop',
        name: 'TestTimer4',
        accumulatedMilliseconds: 4000,
        start: null,
      },
      {
        id: 'qrstu',
        name: 'TestTimer5',
        accumulatedMilliseconds: 4000,
        start: new Date(),
      },
    ],
  });
  stoppedTimerInfos$: Observable<TimerInfo[]>;
  activeTimerInfos$: Observable<TimerInfo[]>;

  constructor() { }

  ngOnInit() {
    const timerInfos$ = this.timerInfoMessage$.pipe(
      map((timerInfoMessage) => timerInfoMessage.timerInfos)
    );
    this.stoppedTimerInfos$ = timerInfos$.pipe(
      map((timerInfos) => timerInfos.filter((timerInfo) => !timerInfo.start))
    );
    this.activeTimerInfos$ = timerInfos$.pipe(
      map((timerInfos) => timerInfos.filter((timerInfo) => !!timerInfo.start))
    );
  }

}
