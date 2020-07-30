import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySecond'
})
export class MySecondPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.split('').reverse().join('');
  }

}
