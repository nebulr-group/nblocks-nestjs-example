import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getData(): number[] {
    return this._randomFill(3, 0, 1);
  }

  private _randomFill(amount: number, min: number, max: number): number[] {
    const arr = [];
    let total = 0;

    // fill an array with random numbers
    for (let i = 0; i < amount; i++) arr.push(this._random(min, max));

    // add up all the numbers
    for (let i = 0; i < amount; i++) total += arr[i];

    // normalise so numbers add up to 1
    for (let i = 0; i < amount; i++) arr[i] /= total;

    return arr;
  }

  private _random(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }
}
