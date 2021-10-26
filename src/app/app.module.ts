import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { CartToCartMapPipe } from './pipes/cart-to-cart-map.pipe';
import { ItemIdToNamePipe } from './pipes/item-id-to-name.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    CartComponent,
    DiscountPipe,
    CartToCartMapPipe,
    ItemIdToNamePipe,
    PageNotFoundComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DiscountPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
