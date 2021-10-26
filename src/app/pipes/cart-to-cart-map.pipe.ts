import { Pipe, PipeTransform } from '@angular/core';
import {CartMap} from "../models/cart-map";

@Pipe({
  name: 'cartToCartMap',
  pure: true
})
export class CartToCartMapPipe implements PipeTransform {

  transform(cart: number[]): CartMap[] {
    const cartMapArray: CartMap[] = [];

    console.log("Funkcija iškviesta!");

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

}
