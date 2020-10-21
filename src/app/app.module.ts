import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { SearchInboxComponent } from './components/search-inbox/search-inbox.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule,  } from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from 'src/environments/environment';
// import { ProductService } from './sevices/product.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemComponent,
    SearchInboxComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
  // providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
