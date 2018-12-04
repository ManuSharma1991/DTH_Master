import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'channelCategory'
})
export class ChannelCategoryPipe implements PipeTransform {

  transform(channelcategory: String): String {
    const categoryarray = channelcategory.split(/(?=[A-Z])/);
    let str = '';
    for (let i = 0; i < categoryarray.length; i++) {
      if (categoryarray[i] === 'H' || categoryarray[i] === 'D') {
        str = str + categoryarray[i];
      } else {
        if (categoryarray[i] === 'Kidsand') {
          str = str + ' Kids' + ' and ';
        } else {
          str = str + ' ' + categoryarray[i] + ' ';
        }
      }
    }
    return str;
  }

}
