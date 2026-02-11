import { TestBed } from '@angular/core/testing';

import { DiscountpaymentService } from './discountpayment.service';

describe('DiscountpaymentService', () => {
  let service: DiscountpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
