import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualpaymentService {

  constructor() { }

  getPayment(amount: number): number {
    return amount; //actual payment is the same as the amount for now 
  }

  checkPaymentStatus(): void {
    console.log('Payment status checked');
  }
}
