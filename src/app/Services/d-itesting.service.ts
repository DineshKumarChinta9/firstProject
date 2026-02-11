import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DITestingService {
  name: string = 'Dinesh Kumar Ch'; 
  constructor() { }

  log(message: string){
    console.log(this.name + ' - ' + message);
  }
}
