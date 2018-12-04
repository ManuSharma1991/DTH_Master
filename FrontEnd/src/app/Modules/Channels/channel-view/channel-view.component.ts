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

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.channelList = data.Channel;
    });

    let i;
    let len;
    for (i = 0, len = this.channelList.length; i < len; i = i + 37) {
      this.shortArrays.push(this.channelList.slice(i, i + 37));
    }
  }
}
