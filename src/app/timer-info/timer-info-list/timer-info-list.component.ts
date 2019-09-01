import {Component, Input, OnInit} from '@angular/core';
import {TimerInfo} from '../../model/TimerInfo';

@Component({
  selector: 'app-timer-info-list',
  templateUrl: './timer-info-list.component.html',
  styleUrls: ['./timer-info-list.component.scss']
})
export class TimerInfoListComponent implements OnInit {

  @Input()
  timerInfos: TimerInfo[];

  constructor() { }

  ngOnInit() {
  }

}
