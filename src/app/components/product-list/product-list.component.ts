import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product';
import {ProductService} from 'src/app/sevices/product.service';
import {MessengerService} from 'src/app/sevices/messenger.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
   productsList: Product[] = []
   data : Object; 
  addProduct: Product;
  constructor(private productService: ProductService, private msg:MessengerService, private firestore: AngularFirestore) { }

  deleteList(){
    this.productsList.forEach(Product => {
      this.data ={ id:Product.id, name: Product.name, comment:Product.comment, qty: Product.qty}
      this.firestore.doc('shoppinglist/'+Product.id).delete();
    });
    this.productsList = [];

  }
  
  ngOnInit(): void {
      this.productService.getProuducts().subscribe(actionArray =>{
        this.productsList = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
           ...item.payload.doc.data()as Product};
        })
      });
    this.msg.getMsg().subscribe(productName =>{
      this.addProductToList(productName)
    })
  }
  
  addProductToList(productName, ){
    // this.addProduct ={id: this.productsList.length +1,name: productName,comment:'',qty:1} as object 
    this.data =  { name: productName,comment:'',qty:1}
    this.firestore.collection('shoppinglist').add(this.data);
    console.log(this.productsList)
}
  
}
