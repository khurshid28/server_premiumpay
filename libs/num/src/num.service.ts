import { Injectable } from '@nestjs/common';

@Injectable()
export class NumService {
  toMoney(data: number): string {
    if (!data) {
      return '0';
    }
    data = Math.floor(data);
    let result = '';
    for (let i = 0; i < data.toString().length; i++) {
      result += data.toString()[i];
      if ((data.toString().length - i) % 3 == 1) {
        result += ' ';
      }
    }
    return result;
  }
}
