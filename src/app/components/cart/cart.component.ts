import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {CartMap} from "../../models/cart-map";

@Component({
  selector: 'app-cart[cart][items]',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input()
  cart!: number[];

  @Input()
  items!: Item[];

  constructor() { }

  ngOnInit(): void {
  }

  public transformToCartItems(cart: number[]): CartMap[] {
    const cartMapArray: CartMap[] = [];

    // Einame per kiekvieną id
    cart.forEach((itemId: number) => {

      // Patikrinkime ar toks ID jau nėra sugrupuotas
      const hasItemIdMapped = cartMapArray.some((mapping) => mapping.itemId === itemId);

      if (hasItemIdMapped)
        return;

      // Skaičiuojame, kiek tokių id jau yra krepšelyje
      const items = cart.filter((i) => i === itemId);

      const mapping: CartMap = {
        itemId: itemId,
        itemCount: items.length
      };

      cartMapArray.push(mapping);
    });

    return cartMapArray;
  }

  public itemIdToName(itemId: number): string {
    const item = this.items.find((item) => item.id === itemId);

    return item?.name || "";

    // return item ? item.name : "";
  }
}
