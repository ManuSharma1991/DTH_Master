import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../Channels/channel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidator } from '../../Shared/shared/Validators/email-validator';
import { phoneNumberValidator } from '../../Shared/shared/Validators/phone-number-validator';
import { shiftTimeValidator } from '../../Shared/shared/Validators/shift-time-validator';
import { Channel } from '../../Channels/channel';

@Component({
  selector: 'app-channel-update',
  templateUrl: './channel-update.component.html',
  styleUrls: ['./channel-update.component.css']
})
export class ChannelUpdateComponent implements OnInit {
  prechannel: Channel;
  postchannel: Channel;
  errmessage: string;
  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  channelUpdationForm = new FormGroup({
    channelnumber: new FormControl('', [Validators.required]),
    channelname: new FormControl('', [Validators.required]),
    audiocarrierfrequency: new FormControl('', Validators.required),
    videocarrierfrequency: new FormControl('', Validators.required),
    channelcategory: new FormControl('', Validators.required),
    channeltransmissiontype: new FormControl('', Validators.required),
    channelchargetype: new FormControl('', Validators.required),
    channelcharge: new FormControl('', Validators.required),
    channelband: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.prechannel = data.Channel;
    });
    this.channelUpdationForm.patchValue({
      channelnumber: this.prechannel.channelnumber,
      channelname: this.prechannel.channelname,
      audiocarrierfrequency: this.prechannel.audiocarrierfrequency,
      videocarrierfrequency: this.prechannel.videocarrierfrequency,
      channelcategory: this.prechannel.channelcategory,
      channeltransmissiontype: this.prechannel.channeltransmissiontype,
      channelchargetype: this.prechannel.channelchargetype,
      channelcharge: this.prechannel.channelcharge,
      channelband: this.prechannel.channelband
    });
  }

  updatechannel(channel: Channel) {
    this.postchannel = this.channelUpdationForm.value;
    this.postchannel.assetlocation = this.prechannel.assetlocation;
    console.log(this.postchannel);
    return this.channelService
      .updateChannel(this.postchannel)
      .subscribe(data => {
        this.postchannel = data;
        this.router.navigateByUrl('/adminchannelmanagement');
      });
  }
}
