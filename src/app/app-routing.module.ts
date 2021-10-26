import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from "./components/item-list/item-list.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {CartComponent} from "./components/cart/cart.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";

const routes: Routes = [
  {
    path: 'items',
    component: ItemListComponent
  },
  // {
  //   path: '',
  //   component: ItemListComponent
  // },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'payment',
    redirectTo: 'cart',
    pathMatch: 'full',
  },
  {
    path: 'details',
    component: UserDetailsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
