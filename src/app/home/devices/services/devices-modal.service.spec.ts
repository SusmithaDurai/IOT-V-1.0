import { TestBed } from '@angular/core/testing';

import { DevicesModalService } from './devices-modal.service';

describe('DevicesModalService', () => {
  let service: DevicesModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
