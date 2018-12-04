import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel-view',
  templateUrl: './channel-view.component.html',
  styleUrls: ['./channel-view.component.css']
})
export class ChannelViewComponent implements OnInit {
  channelList: Channel[];
  shortArrays = [];
  categoryList: String[];

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.channelList = data.Channel;
      this.categoryList = data.ChannelCategory;
      console.log(this.channelList);
      console.log(this.categoryList);
    });

    let i;
    let len;
    let j;
    let len2;
    for (i = 0, len = this.channelList.length; i < len; i++) {
      for (j = 0, len2 = this.categoryList.length; j < len2; j++) {
        if (this.channelList[i].channelcategory === this.categoryList[j]) {
          this.shortArrays.push(this.channelList[i]);
        }
      }
    }
  }
}
