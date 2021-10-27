import { Injectable } from '@angular/core';
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public items: Item[] = [];

  constructor() {
    this.items.push(new Item(1, "Lego", 120, 10));
    this.items.push(new Item(665, "Kryželis", 10, 0));
    this.items.push(new Item(419, "SEL Albumas", 15, 50));
    this.items.push(new Item(68, "Pikaso Albumas", 35, 70));
  }
}
