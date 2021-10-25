import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Item} from "../../models/item";

@Component({
  selector: 'app-item[item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  public item!: Item;

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
