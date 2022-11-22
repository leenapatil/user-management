import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchStringFilter'
})
export class SearchStringPipe implements PipeTransform {

  transform(items: any[], field: string, value): unknown {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }
    return items.filter((singleItem) =>
      singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
  }

}
