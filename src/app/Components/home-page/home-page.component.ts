import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
title = 'Welcome to the Home Page';
name:string = '';
city:string = 'New York';
today: Date = new Date();
myFullName: string = 'Dinesh Kumar Ch';
start:number = 0;
end:number = 4;
format:string  = 'shortDate';

parentArrays: number[] = [1,2,3,4,5];

parentsObj:object[] = [{
  firstName: 'Dinesh',
  lastName: 'Kumar',
  age: 25
}];

childDataFromAboutPage: string = '';

testfn(){
  return "This is a test function";
}

invalidfn(){
  return false;
}

writeName(event: any){
  this.name = event.target.value;
}

alertCity(){
 this.city = 'Los Angeles';
}

toggelFormat(){
  console.log(this.format);
this.format = this.format === 'shortDate' ? 'fullDate' : 'shortDate';
}


}
