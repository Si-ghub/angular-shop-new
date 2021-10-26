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

  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
