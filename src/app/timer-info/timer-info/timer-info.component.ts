import {Component, Input, OnInit} from '@angular/core';
import {TimerInfo} from '../../model/TimerInfo';
import {interval, Observable} from 'rxjs';
import {filter, map} from 'rxjs/internal/operators';
import {tick} from '@angular/core/testing';
import {TimerInfoService} from '../timer-info-service/timer-info.service';

@Component({
  selector: 'app-timer-info',
  templateUrl: './timer-info.component.html',
  styleUrls: ['./timer-info.component.scss']
})
export class TimerInfoComponent implements OnInit {

  @Input()
  timerInfo: TimerInfo;
  runningMilliseconds$: Observable<number>;

  constructor(private timerInfoService: TimerInfoService) {
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

  start() {
    if (!this.isRunning()) {
      this.timerInfo.start = new Date();
      this.timerInfoService.addOrUpdateTimer(this.timerInfo);
    }
  }

  stop() {
    if (this.isRunning()) {
      const additionalMillis = new Date().getTime() - this.timerInfo.start.getTime();
      this.timerInfo.accumulatedMilliseconds = this.timerInfo.accumulatedMilliseconds + additionalMillis;
      this.timerInfo.start = null;
      this.timerInfoService.addOrUpdateTimer(this.timerInfo);
    }
  }

  remove() {
    this.timerInfoService.removeTimer(this.timerInfo);
  }

  isRunning() {
    return !!this.timerInfo && !!this.timerInfo.start;
  }

}
