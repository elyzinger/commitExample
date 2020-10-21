import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from '../models/product';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []
  // = [
  //   new Product (0,'milk', '',1),
  //   new Product (1,'appple', '',1),
  //   new Product (2,'orange', '',1),
  //   new Product (3,'zero', '',1),
  //   new Product (4,'cheese', '',1),
  // ]
  // items: FirebaseListObservable<Product[]>;

  constructor(public db: AngularFirestore) {
     
   }
  
  getProuducts(){
    // this.products.push(new Product(1,' ','',1))
   
  //  console.log(this.items);
    return this.db.collection('shoppinglist').snapshotChanges();
     
  }
}