import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterBy' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, searchTerm: string): any[] {
    if (!items || !searchTerm) return items;
    return items.filter(item =>
      item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
