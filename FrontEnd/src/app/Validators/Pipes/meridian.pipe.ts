import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meridian'
})
export class MeridianPipe implements PipeTransform {

  transform(shiftstarttime: any): String {
    if ((parseInt(shiftstarttime, 10)) === 0) {
      return 'A.M.';
    } else if ((parseInt(shiftstarttime, 10)) === 12) {
      return 'P.M.';
    } else {
      return null;
    }
  }

}
