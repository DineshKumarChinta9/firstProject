import { Inject, Injectable } from '@angular/core';
import { API_URL, APP_CONFIG, AppConfig } from '../app.token';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(@Inject(API_URL) private apiUrl: string,@Inject(APP_CONFIG) private appConfig: AppConfig) { }

  mobiles = [
    { name: 'samsung', price: 25000, color: 'black' },
    { name: 'iphone', price: 55000, color: 'white' },
    { name: 'oneplus', price: 35000, color: 'blue' },
    { name: 'nokia', price: 15000, color: 'grey' },
  ];

  getMobiles() {
    return this.mobiles;
  }

  getUsers() {
    return fetch(`${this.apiUrl}/users`);
  }
}
