import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerInfoComponent} from './timer-info/timer-info.component';
import {TimerInfoListComponent} from './timer-info-list/timer-info-list.component';
import {TimerInfoHomeComponent} from './timer-info-home/timer-info-home.component';
import {TimerInfoRoutingModule} from './timer-info-routing.module';
import {TimeModule} from '../pipe/time/time.module';
import {TimerInfoService} from './timer-info-service/timer-info.service';


@NgModule({
  declarations: [
    TimerInfoComponent,
    TimerInfoListComponent,
    TimerInfoHomeComponent,
  ],
  imports: [
    CommonModule,
    TimerInfoRoutingModule,
    TimeModule,
  ],
  providers: [
    TimerInfoService,
  ]
})
export class TimerInfoModule {
}
