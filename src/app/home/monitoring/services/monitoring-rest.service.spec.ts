import { TestBed } from '@angular/core/testing';

import { MonitoringRestService } from './monitoring-rest.service';

describe('MonitoringRestService', () => {
  let service: MonitoringRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoringRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
