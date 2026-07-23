import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rupee' })
export class RupeePipe implements PipeTransform {
  transform(value: number, symbol: string = '₹'): string {
    if (isNaN(value)) return '';
    return symbol + value.toLocaleString('en-IN');
  }
}
