import { TestBed } from '@angular/core/testing';

import { RoomsRestDatasourceService } from './rooms-rest-datasource.service';

describe('RoomsRestDatasourceService', () => {
  let service: RoomsRestDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomsRestDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
