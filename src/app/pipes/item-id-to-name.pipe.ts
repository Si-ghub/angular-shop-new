import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../models/item";

@Pipe({
  name: 'itemIdToName'
})
export class ItemIdToNamePipe implements PipeTransform {
  transform(itemId: number, items: Item[]): string {
    const item = items.find((item) => item.id === itemId);

    return item?.name || "";
  }
}
