import { TestBed } from '@angular/core/testing';

import { DITestingService } from './d-itesting.service';

describe('DITestingService', () => {
  let service: DITestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DITestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
