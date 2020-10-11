import { TestBed } from '@angular/core/testing';

import { RoomsModalService } from './rooms-modal.service';

describe('RoomsModalService', () => {
  let service: RoomsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
