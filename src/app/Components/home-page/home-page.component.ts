import { Component, ElementRef, Self, ViewChild } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { TestService } from 'src/app/Services/test.service';
import { DITestingService } from 'src/app/Services/d-itesting.service';
import { ActualpaymentService } from 'src/app/Services/actualpayment.service';
import { DiscountpaymentService } from 'src/app/Services/discountpayment.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [TestService, DITestingService, // here we are providing TestService and DITestingService at the component level, which means they will be available only within this component and its child components.
     { provide: ActualpaymentService, useClass: DiscountpaymentService }
    // Using DiscountpaymentService instead of ActualpaymentService
    // Here we are using Angular's dependency injection to provide an instance of DiscountpaymentService 
    // whenever ActualpaymentService is requested. This allows us to use the functionality of DiscountpaymentService 
    // while still adhering to the interface defined by ActualpaymentService.
    // only the override getPayment method of DiscountpaymentService will be used when we inject ActualpaymentService,
    //  but the remaining methods of ActualpaymentService will be inherited and can be used as is without any changes. 
  ]
})
export class HomePageComponent {
  @ViewChild('inputBox') inputB!: ElementRef;
  @ViewChild(AboutPageComponent) aboutPageComponent!: AboutPageComponent;
  title = 'Welcome to the Home Page';
  name: string = '';
  city: string = 'New York';
  today: Date = new Date();
  myFullName: string = 'Dinesh Kumar Ch';
  start: number = 0;
  end: number = 4;
  format: string = 'shortDate';

  parentArrays: number[] = [1, 2, 3, 4, 5];

  parentsObj: object[] = [{
    firstName: 'Dinesh',
    lastName: 'Kumar',
    age: 25
  }];

  childDataFromAboutPage: string = '';

  receiveServiceMobilesData: any[] = [];
  amount: number = 0;
  //@self() is used to inject a dependency that is only available in the current component's injector. This means that if the dependency is not found in the current component's injector,
  //  Angular will not look for it in the parent injectors and will throw an error. 
  // This is useful when you want to ensure that a specific instance of a service is used within a component and its child components, without accidentally using an instance from a parent component.
  constructor(private testService: TestService,
     @Self() private dITestingService: DITestingService, 
     private actualPaymentService: ActualpaymentService) {
    // if (this.dITestingService) {
    //   this.dITestingService.log('constructor of HomePageComponent');
    // }
    console.log(this.actualPaymentService.checkPaymentStatus()); // Example usage of ActualpaymentService
    console.log(this.actualPaymentService.getPayment(100)); // Example usage of ActualpaymentService
  }


  testfn() {
    return "This is a test function";
  }

  invalidfn() {
    return false;
  }

  writeName(event: any) {
    this.name = event.target.value;
  }

  alertCity() {
    this.city = 'Los Angeles';
  }

  toggelFormat() {
    console.log(this.format);
    this.format = this.format === 'shortDate' ? 'fullDate' : 'shortDate';
  }

  focusInput() {
    console.log(this.inputB.nativeElement.value);
  }

  changeMessage() {
    this.aboutPageComponent.childMessage('Message changed from Home Page Component');
  }

  getMobilesFromService() {
    this.receiveServiceMobilesData = this.testService.getMobiles();
  }


  load() {
    console.log(this.testService.getUsers());
  }

}
