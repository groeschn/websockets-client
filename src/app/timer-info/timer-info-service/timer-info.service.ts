import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TimerInfoMessage} from '../../model/TimerInfoMessage';
import {TimerInfo} from '../../model/TimerInfo';
import {TimerInfoMessageAction} from '../../model/TimerInfoMessageAction';
import {share} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerInfoService {

  timerInfoMessages$ = of({
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
        start: new Date(),
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
  }).pipe(
    share(),
  );

  constructor() {
  }

  public serverMessages$(): Observable<TimerInfoMessage> {
    return this.timerInfoMessages$;
  }

  public addOrUpdateTimer(timerInfo: TimerInfo): void {
    const addOrUpdateMessage: TimerInfoMessage = {
      action: TimerInfoMessageAction.ADD,
      timerInfos: [
        timerInfo
      ],
    };
  }

  public removeTimer(timerInfo: TimerInfo): void {
    const removeMessage: TimerInfoMessage = {
      action: TimerInfoMessageAction.REMOVE,
      timerInfos: [
        timerInfo
      ],
    };
  }
}
