import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipeUpperCase',
})
export class MyPipePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.toUpperCase();
  }
}
