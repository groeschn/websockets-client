import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInfoListComponent } from './timer-info-list.component';

describe('TimerInfoListComponent', () => {
  let component: TimerInfoListComponent;
  let fixture: ComponentFixture<TimerInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
