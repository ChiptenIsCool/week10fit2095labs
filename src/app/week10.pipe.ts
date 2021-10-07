import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'week10'
})
export class Week10Pipe implements PipeTransform {

  transform(value: number): number {
    let transformedStr;
    transformedStr = 2021 - value;
    return transformedStr;

}
}