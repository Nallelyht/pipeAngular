import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(name: string, args?: any): any {
    return name = name.split('')[0].toUpperCase() + name.substring(1);
  }

}
