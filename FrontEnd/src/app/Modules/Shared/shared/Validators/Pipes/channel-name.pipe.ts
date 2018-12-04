import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'channelName'
})
export class ChannelNamePipe implements PipeTransform {

  transform(channelName: String): String {
    console.log(channelName);
    const namearray = channelName.split(/[.]+/);
    console.log(namearray);
    const name = namearray[0].split(/-/);
    console.log(name);
    let str = '';
    for (let i = 0; i < name.length; i++) {
      str = str + name[i] + ' ';
    }
    return str;
  }

}
