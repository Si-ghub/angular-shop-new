export class Item {
  public constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    public isOnSale: boolean = false
  ) {
  }
}
