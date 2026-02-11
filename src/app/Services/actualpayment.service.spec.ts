import { TestBed } from '@angular/core/testing';

import { ActualpaymentService } from './actualpayment.service';

describe('ActualpaymentService', () => {
  let service: ActualpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
