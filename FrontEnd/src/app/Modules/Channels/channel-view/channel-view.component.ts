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
  constructor(private route: ActivatedRoute) {}
  filter;
  key = 'firstname';
  reverse = false;
  p = 1;
  itemsPerPage = 5;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.channelList = data.Channel;
    });
  }
}
