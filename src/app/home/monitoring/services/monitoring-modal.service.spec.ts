import { TestBed } from '@angular/core/testing';

import { MonitoringModalService } from './monitoring-modal.service';

describe('MonitoringModalService', () => {
  let service: MonitoringModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
