import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: number[] = [];

  constructor() {
  }
}
