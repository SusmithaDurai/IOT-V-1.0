import { TestBed } from '@angular/core/testing';

import { DevicesRestDatasourceService } from './devices-rest-datasource.service';

describe('DevicesRestDatasourceService', () => {
  let service: DevicesRestDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesRestDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
