import { Component, OnInit } from '@angular/core';
import {TimerInfo} from '../../model/TimerInfo';
import {Observable, of} from 'rxjs';
import {TimerInfoMessage} from '../../model/TimerInfoMessage';
import {TimerInfoMessageAction} from '../../model/TimerInfoMessageAction';
import {map} from 'rxjs/operators';
import {TimerInfoService} from '../timer-info-service/timer-info.service';

@Component({
  selector: 'app-timer-info-home',
  templateUrl: './timer-info-home.component.html',
  styleUrls: ['./timer-info-home.component.scss']
})
export class TimerInfoHomeComponent implements OnInit {

  stoppedTimerInfos$: Observable<TimerInfo[]>;
  activeTimerInfos$: Observable<TimerInfo[]>;

  constructor(private timerInfoService: TimerInfoService) { }

  ngOnInit() {
    const timerInfos$ = this.timerInfoService.serverMessages$().pipe(
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
