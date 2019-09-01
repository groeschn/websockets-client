import {Component, Input, OnInit} from '@angular/core';
import {TimerInfo} from '../../model/TimerInfo';
import {interval, Observable} from 'rxjs';
import {filter, map} from 'rxjs/internal/operators';
import {tick} from '@angular/core/testing';

@Component({
  selector: 'app-timer-info',
  templateUrl: './timer-info.component.html',
  styleUrls: ['./timer-info.component.scss']
})
export class TimerInfoComponent implements OnInit {

  @Input()
  timerInfo: TimerInfo;
  runningMilliseconds$: Observable<number>;

  constructor() {
  }

  ngOnInit() {
    this.runningMilliseconds$ = interval(100).pipe(
      filter((_) => !!this.timerInfo),
      map((tick) => {
        if (!!this.timerInfo.start) {
          const additionalMillis = new Date().getTime() - this.timerInfo.start.getTime();
          return this.timerInfo.accumulatedMilliseconds + additionalMillis;
        } else {
          return this.timerInfo.accumulatedMilliseconds;
        }
      }),
    );
  }

}
