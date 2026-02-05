import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild('inputBox') inputB!:ElementRef;
  @ViewChild(AboutPageComponent,) aboutPageComponent!: AboutPageComponent;
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

receiveServiceMobilesData: any[] = [];
constructor(private testService: TestService){}


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

focusInput(){
  console.log(this.inputB.nativeElement.value);
}

changeMessage(){
  this.aboutPageComponent.childMessage('Message changed from Home Page Component'); 
}

getMobilesFromService(){
  this.receiveServiceMobilesData = this.testService.getMobiles(); 
}

}
