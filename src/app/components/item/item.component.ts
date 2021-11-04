import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Item} from "../../models/item";
import {MessagesService} from "../../services/messages.service";
import {NotificationType} from "../../models/notification";

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

  constructor(private messagesService: MessagesService) {
    this.onItemAdded = new EventEmitter<void>();
    this.onItemRemoved = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  public postItemRemovedMessage(): void {
    this.messagesService.postMessage({
      message: "Prekė išimta iš krepšelio",
      type: NotificationType.Warning
    });
  }

}
