import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInfoHomeComponent } from './timer-info-home.component';

describe('TimerInfoHomeComponent', () => {
  let component: TimerInfoHomeComponent;
  let fixture: ComponentFixture<TimerInfoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerInfoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerInfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
