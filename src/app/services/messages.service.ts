import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Notification} from "../models/notification";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public readonly onNewMessage: Subject<Notification>;

  constructor() {
    this.onNewMessage = new Subject<Notification>();
  }

  public postMessage(notification: Notification): void {
    this.onNewMessage.next(notification);
  }
}
