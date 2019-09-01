import {TimerInfo} from './TimerInfo';
import {TimerInfoMessageAction} from './TimerInfoMessageAction';

export interface TimerInfoMessage {
  action: TimerInfoMessageAction;
  timerInfos: TimerInfo[];
}
