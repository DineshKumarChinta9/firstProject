import { Injectable } from '@angular/core';
import { ActualpaymentService } from './actualpayment.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountpaymentService extends ActualpaymentService {
// This service extends the ActualpaymentService and overrides the getPayment method to apply a discount to the payment amount.
//Here we only override the getpayment method to calculate the discounted payement
//but the remaining methods of ActualpaymentService will be inherited and can be used as is without any changes.
  override getPayment(amount: number, discount: number = 10): number {
    return amount - (amount * discount / 100); //calculate discounted payment
  }
}
