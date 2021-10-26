import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item";
import {DiscountPipe} from "../../pipes/discount.pipe";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  public items: Item[] = [];
  public cart: number[] = [];

  public saleEndDate: Date = new Date("2021-12-23");

  constructor(private discountPipe: DiscountPipe) {
  }

  ngOnInit(): void {
    this.items.push(new Item(1, "Lego", 120, 10));
    this.items.push(new Item(665, "Kryželis", 10, 0));
    this.items.push(new Item(419, "SEL Albumas", 15, 50));
  }

  public addToCart(itemId: number) {
    // [] <--- Taip susikuria naujas masyvas
    // [...kitasMasyvas] <--- Taip į masyvą "pažeriami" kito masyvo elementai
    // [1, 2, 3]
    // [...kitasMasyvas, 1]
    this.cart = [...this.cart, itemId];
  }

  public removeFromCart(itemId: number) {
    const itemIndex = this.cart.indexOf(itemId);

    if (itemIndex !== -1)
      this.cart.splice(itemIndex, 1);

    this.cart = [...this.cart]; // Nedaryti to namuose!
  }

  public generateCSV(): void {
    this.items.forEach((item) => {
      const finalPrice = this.discountPipe.transform(item.price, item.discount);
    });
  }
}
