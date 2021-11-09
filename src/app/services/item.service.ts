import {Injectable} from '@angular/core';
import {Item, ItemWithoutId} from "../models/item";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessagesService} from "./messages.service";
import {NotificationType} from "../models/notification";
import {Observable} from "rxjs";
import {AccessService} from "./access.service";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _items: Item[] = [];

  constructor(public http: HttpClient,
              private messageService: MessagesService,
              private accessService: AccessService) {
  }

  public addItem(item: ItemWithoutId): Observable<any> {
    if (!this.accessService.token)
      throw new Error("You need access token for this request");

    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.set("X-AUTH-HEADER", this.accessService.token);

    const request = this.http.post(
      "http://localhost:3000/api/product",
      item,
      {
        headers: {"X-AUTH-HEADER": this.accessService.token},
        params: {
          testParam: 123
        }
      });

    return request;
  }

  public get items(): Item[] {
    return this._items;
  }

  public getChuckNorrisJoke(): void {
    const request = this.http.get("https://api.chucknorris.io/jokes/random");

    request.subscribe((response: any) => {
      console.log("Atėjo atsakymas!", response.value);

      this.messageService.postMessage({
        type: NotificationType.Success,
        message: response.value
      });
    });
  }

  public getItems(): void {
    const request = this.http.get("http://localhost:3000/api/product");

    request.subscribe((response: any) => {
      console.log("Get items response:", response);
      this._items = response;
    });
  }
}
