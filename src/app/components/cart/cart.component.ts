import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  counter: number = 0;

  constructor(public cartService: CartService,
              public itemService: ItemService) {
  }

  ngOnInit(): void {
  }
}
