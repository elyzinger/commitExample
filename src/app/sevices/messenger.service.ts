  
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  constructor() { }
  sendMsg(productName){
    this.subject.next(productName)
    // console.log(productName)
  }
  getMsg(){
    return this.subject.asObservable();
  }
}