import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ProductListComponent} from 'src/app/components/product-list/product-list.component'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()productItem: Product

  onAdd(product){
    // this.productItem.qty++
    this.firestore.doc('shoppinglist/'+this.productItem.id).update({qty: this.productItem.qty+1})
  }
  onDecrease(product){
    if(this.productItem.qty > 1)
    this.firestore.doc('shoppinglist/'+this.productItem.id).update({qty: this.productItem.qty-1})
  }
  onComment(product){
    
    this.firestore.doc('shoppinglist/'+this.productItem.id).update({comment: this.productItem.comment})
  }
  onDelete(){
    
  }
  constructor(private productListComponent:ProductListComponent,private firestore: AngularFirestore) { }


  deleteProductItem(Product){
    // this.productListComponent.productsList.splice( this.productListComponent.productsList.indexOf(this.productItem), 1  )
    this.firestore.doc('shoppinglist/'+ this.productItem.id).delete();
  }
  ngOnInit(): void {
    // console.log(this.productItem)
  }

}
