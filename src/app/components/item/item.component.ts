import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Item } from "../../models/item";

@Component({
  selector: 'app-item[item]', // reikia parasyti, kad neraudonuotu Input item
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // ! dedam kai norim priversti rinktis komponenta
  @Input()
  public item!: Item;

  // tokiu budu komponenetas kazka pasako savo teviniam komponentui
  @Output()
  onItemAdded!: EventEmitter<void>;

  @Output()
  onItemRemoved!: EventEmitter<void>;

  constructor() {
    this.onItemAdded = new EventEmitter<void>();
    this.onItemRemoved = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

}
