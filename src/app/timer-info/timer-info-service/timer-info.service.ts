import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject} from 'rxjs';
import {TimerInfoMessage} from '../../model/TimerInfoMessage';
import {TimerInfo} from '../../model/TimerInfo';
import {TimerInfoMessageAction} from '../../model/TimerInfoMessageAction';
import {WebSocketSubject, WebSocketSubjectConfig} from 'rxjs/internal/observable/dom/WebSocketSubject';

@Injectable({
  providedIn: 'root'
})
export class TimerInfoService {

  private socket$: WebSocketSubject<TimerInfoMessage>;

  private serverListMessages$ = new ReplaySubject<TimerInfoMessage>();

  constructor() {
    const config: WebSocketSubjectConfig<TimerInfoMessage> = {
      deserializer: (event) => JSON.parse(event.data, (key, value) => key === 'start' ? new Date(value) : value),
      url: 'ws://localhost:8080/websockets/timer-info',
    };
    this.socket$ = new WebSocketSubject<TimerInfoMessage>(config);
    this.socket$.subscribe(
      (timerInfoMessage) => {
        if (timerInfoMessage.action.toString() === TimerInfoMessageAction.LIST.toString()) {
          this.serverListMessages$.next(timerInfoMessage);
        }
      },
      (error) => console.log(error),
      () => console.log('websocket completed')
    );
  }

  public serverMessages$(): Observable<TimerInfoMessage> {
    return this.serverListMessages$;
  }

  public addOrUpdateTimer(timerInfo: TimerInfo): void {
    const addOrUpdateMessage: TimerInfoMessage = {
      action: TimerInfoMessageAction.ADD,
      timerInfos: [
        timerInfo
      ],
    };
    this.socket$.next(addOrUpdateMessage);
  }

  public removeTimer(timerInfo: TimerInfo): void {
    const removeMessage: TimerInfoMessage = {
      action: TimerInfoMessageAction.REMOVE,
      timerInfos: [
        timerInfo
      ],
    };
    this.socket$.next(removeMessage);
  }
}
