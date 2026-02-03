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
}
