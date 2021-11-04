import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {Notification} from "../../models/notification";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages: Notification[] = [];

  constructor(private messagesService: MessagesService) {
    this.messagesService.onNewMessage.subscribe((msg: Notification) => {
      console.log("Gauta žinutė:", msg);

      this.messages.push(msg);

      setTimeout(() => {
        const messageIndex = this.messages.indexOf(msg);

        this.messages.splice(messageIndex, 1);
      }, 5000);
    });
  }

  ngOnInit(): void {
  }
}
