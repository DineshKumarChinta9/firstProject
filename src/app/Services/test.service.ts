import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  mobiles=[
    {name:'samsung', price:25000, color:'black'},
    {name:'iphone', price:55000, color:'white'},
    {name:'oneplus', price:35000, color:'blue'},
    {name:'nokia', price:15000, color:'grey'},
  ];
  
  getMobiles(){
    return this.mobiles;
  }
}
