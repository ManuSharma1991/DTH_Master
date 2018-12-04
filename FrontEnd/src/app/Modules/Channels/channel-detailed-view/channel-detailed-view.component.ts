import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Channel } from '../channel';

@Component({
  selector: 'app-channel-detailed-view',
  templateUrl: './channel-detailed-view.component.html',
  styleUrls: ['./channel-detailed-view.component.css']
})
export class ChannelDetailedViewComponent implements OnInit {
  channel: Channel;
  flag = true;
  errmessage: string;

  constructor(
    private channelSerice: ChannelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.channel = data.Channel;
    });
  }

  delete(ChannelID: String) {
    return this.channelSerice.deleteChannel(ChannelID).subscribe(data => {
      this.router.navigateByUrl('/adminchannelmanagement');
    });
  }
}
