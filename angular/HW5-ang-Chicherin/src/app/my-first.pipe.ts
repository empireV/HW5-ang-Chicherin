import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirst'
})
export class MyFirstPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    return `${args[0]}${value}.666`;
  }

}
