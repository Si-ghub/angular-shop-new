import { Injectable } from '@angular/core';
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _items: Item[] = [];

  constructor() {
    this._items.push(new Item(1, "Lego", 120, 10));
    this._items.push(new Item(665, "Kryželis", 10, 0));
    this._items.push(new Item(419, "SEL Albumas", 15, 50));
    this._items.push(new Item(68, "Pikaso Albumas", 35, 70));
  }

  public addItem(item: Item): void {
    this._items.push(item);
  }

  public get items(): Item[] {
    return this._items;
  }
}
