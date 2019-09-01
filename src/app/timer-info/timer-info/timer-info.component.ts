import {Component, Input, OnInit} from '@angular/core';
import {TimerInfo} from '../../model/TimerInfo';

@Component({
  selector: 'app-timer-info',
  templateUrl: './timer-info.component.html',
  styleUrls: ['./timer-info.component.scss']
})
export class TimerInfoComponent implements OnInit {

  @Input()
  timerInfo: TimerInfo;

  constructor() { }

  ngOnInit() {
  }

}
