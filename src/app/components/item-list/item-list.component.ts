import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {DiscountPipe} from "../../pipes/discount.pipe";
import {CartService} from "../../services/cart.service";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public saleEndDate: Date = new Date("2021-12-23");

  constructor(private discountPipe: DiscountPipe, public cartService: CartService, public itemService: ItemService) {
  }

  ngOnInit(): void {
  }

  public addToCart(itemId: number) {
    // [] <--- Taip susikuria naujas masyvas
    // [...kitasMasyvas] <--- Taip į masyvą "pažeriami" kito masyvo elementai
    // [1, 2, 3]
    // [...kitasMasyvas, 1]
    this.cartService.cart = [...this.cartService.cart, itemId];
  }

  public removeFromCart(itemId: number) {
    const itemIndex = this.cartService.cart.indexOf(itemId);

    if (itemIndex !== -1)
      this.cartService.cart.splice(itemIndex, 1);

    this.cartService.cart = [...this.cartService.cart]; // Nedaryti to namuose!
  }

  public generateCSV(): void {
    // this.items.forEach((item) => {
    //   const finalPrice = this.discountPipe.transform(item.price, item.discount);
    // });
  }
}
