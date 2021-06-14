import { TestBed } from '@angular/core/testing';

import { IotErrorHandlerService } from './iot-error-handler.service';

describe('IotErrorHandlerService', () => {
  let service: IotErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IotErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
