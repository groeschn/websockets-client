import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimerInfoHomeComponent} from './timer-info-home/timer-info-home.component';


const routes: Routes = [
  {
    path: '',
    component: TimerInfoHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerInfoRoutingModule { }
