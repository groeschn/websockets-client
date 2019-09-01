import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimerInfoComponent} from './timer-info/timer-info.component';
import {TimerInfoListComponent} from './timer-info-list/timer-info-list.component';
import { TimerInfoHomeComponent } from './timer-info-home/timer-info-home.component';
import {TimerInfoRoutingModule} from './timer-info-routing.module';



@NgModule({
  declarations: [
    TimerInfoComponent,
    TimerInfoListComponent,
    TimerInfoHomeComponent,
  ],
  imports: [
    CommonModule,
    TimerInfoRoutingModule,
  ]
})
export class TimerInfoModule { }
