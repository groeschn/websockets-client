import { TestBed } from '@angular/core/testing';

import { TimerInfoService } from './timer-info.service';

describe('TimerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimerInfoService = TestBed.get(TimerInfoService);
    expect(service).toBeTruthy();
  });
});
