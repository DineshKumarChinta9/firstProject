import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  @Input() myLastFullName: string ='';
  @Input() parentArrays: number[] = [];
  @Input() parentsObj: any[] = [];

  @Output() myOutputEvent = new EventEmitter<string>();

  ngOnInit() { 
    this.sendDataToParent();
  }
  sendDataToParent(){
    this.myOutputEvent.emit('Data from About Page Component to Home Page Component');
  }
}
