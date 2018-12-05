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
  categorisedChannels = [];
  categoryList: String[];

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.channelList = data.Channel;
      this.categoryList = data.ChannelCategory;
      console.log(this.channelList);
      console.log(this.categoryList);
    });
  }
  getChannels(category: String): Channel[] {
    this.categorisedChannels = [];
    console.log(category);
    for (let i = 0; i < this.channelList.length; i++) {
      console.log(this.channelList[i].channelcategory === category);
      console.log(category);
      if (this.channelList[i].channelcategory === category) {
        this.categorisedChannels.push(this.channelList[i]);
      }
    }
    return this.categorisedChannels;
  }
}
