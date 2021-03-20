import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeImages'
})
export class PipeImagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
