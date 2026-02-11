import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualpaymentService } from 'src/app/Services/actualpayment.service';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  @Input() myLastFullName: string = '';
  @Input() parentArrays: number[] = [];
  @Input() parentsObj: any[] = [];

  @Output() myOutputEvent = new EventEmitter<string>();

  message: string = 'This is about page component';
  receiveServiceMobilesData: any[] = [];
  constructor(private testService: TestService, private router: Router, private route: ActivatedRoute, private actualPaymentService: ActualpaymentService) { }
  ngOnInit() {
    console.log(this.actualPaymentService.getPayment(10));
    console.log(this.route.snapshot.title);
    this.sendDataToParent();
  }
  sendDataToParent() {
    this.myOutputEvent.emit('Data from About Page Component to Home Page Component');
  }

  childMessage(newMsg: string) {
    this.message = newMsg;
  }

  getMobilesFromService() {
    this.receiveServiceMobilesData = this.testService.getMobiles();
  }
  navigateToSettings() {
    this.router.navigate(['/settings', 123])
  }

}
