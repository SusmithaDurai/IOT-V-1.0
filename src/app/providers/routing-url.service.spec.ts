import { TestBed } from '@angular/core/testing';

import { RoutingURLService } from './routing-url.service';

describe('RoutingURLService', () => {
  let service: RoutingURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
