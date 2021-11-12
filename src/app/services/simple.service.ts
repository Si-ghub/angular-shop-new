import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  constructor() {
  }

  public addNumbers(a: number, b: number): number {
    return a + b;
  }

  public isNumberEven(x: number): boolean {
    return x % 2 === 0;
  }

  public rectangleData(a: number, b: number): RectangleData {
    return {
      perimeter: (a + b) * 2,
      area: a * b
    };
  }
}

export interface RectangleData {
  area: number;
  perimeter: number;
}

