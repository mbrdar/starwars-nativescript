import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, term: any): any {
    //check is search term is undefined
    if(term === undefined) return values;

    return values.filter((value)=> {
      return value.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
