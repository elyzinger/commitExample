import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/sevices/messenger.service';
@Component({
  selector: 'app-search-inbox',
  templateUrl: './search-inbox.component.html',
  styleUrls: ['./search-inbox.component.css']
})
export class SearchInboxComponent implements OnInit {

 
 @Input() productName:string ;
  

  constructor(private msg: MessengerService) { }


  
  ngOnInit(): void {
  }

  handleAddToList(){
    // console.log(this.productName)
    if(this.productName  != '' )
    this.msg.sendMsg(this.productName)
    this.productName = ''
  }

}
