import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  // paduodam Item masyva
  public items: Item[] = [];
  public cart: number[] = [];

  constructor() {
  }

  // reiksmes priskiriam cia
  // sukuriam naujus itemus
  ngOnInit(): void {
    this.items.push(new Item(1, "Lego", 120, 10));
    this.items.push(new Item(665, "Kryželis", 10, 0));
    this.items.push(new Item(419, "SEL Albumas", 15, 50));
  }

  public addToCart(itemId: number) {
    this.cart.push(itemId);
  }

  public removeFromCart(itemId: number) {
    const itemIndex = this.cart.indexOf(itemId);
    // indexOf gali grazinti -1
    if (itemIndex !== -1)
      this.cart.splice(itemIndex, 1);
  }
}
