import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {NgForm} from "@angular/forms";
import {Item} from "../../models/item";
import {MessagesService} from "../../services/messages.service";
import {NotificationType} from "../../models/notification";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  constructor(private itemService: ItemService, private messageService: MessagesService) {
  }

  ngOnInit(): void {
  }

  public createItem(form: NgForm): void {
    if (form.invalid) {
      console.log("Neteisingai įvesti duomenys!");

      this.messageService.postMessage({
        message: "Neteisingai įvesti duomenys!",
        type: NotificationType.Error
      });
      return;
    }

    const itemId = form.form.controls.itemId.value;
    const itemName = form.form.controls.itemName.value;
    const itemPrice = form.form.controls.itemPrice.value;
    const itemDiscount = form.form.controls.itemDiscount.value;

    // Sukuriame prekę pagal formos laukelių reikšmes
    const item = new Item(itemId, itemName, itemPrice, itemDiscount);

    // Įdedame sukurtą prekę į prekių servisą
    this.itemService.addItem(item);

    this.messageService.postMessage({
      message: "Prekė pridėta",
      type: NotificationType.Success
    });

    form.form.reset();
  }
}
