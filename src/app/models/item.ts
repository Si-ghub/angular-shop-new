export class Item {
  public constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    public isOnSale: boolean = false
  ) {
  }
}

export interface ItemWithoutId {
  name: string;
  price: number;
  isOnSale: boolean;
}
