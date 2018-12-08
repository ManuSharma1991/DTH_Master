import { Component } from '@angular/core';
import { Channel } from '../channel';
import { ChannelService } from '../channel.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-channel-registration',
  templateUrl: './channel-registration.component.html',
  styleUrls: ['./channel-registration.component.css']
})
export class ChannelRegistrationComponent {
  channel: Channel;
  constructor(private channelService: ChannelService) {}

  channelRegistrationForm = new FormGroup({
    channelname: new FormControl('', [Validators.required]),
    channelband: new FormControl('', [Validators.required]),
    videocarrierfrequency: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.min(40),
        Validators.max(225)
      ])
    ),
    audiocarrierfrequency: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.min(45),
        Validators.max(230)
      ])
    ),
    channelchargetype: new FormControl('', Validators.required),
    channeltransmissiontype: new FormControl('', [Validators.required]),
    channelcharge: new FormControl('', [Validators.required]),
    channelnumber: new FormControl('', [Validators.required])
  });

  register() {
    console.log(this.channelRegistrationForm.value);
    this.channelService
      .insertChannel(this.channelRegistrationForm.value)
      .subscribe(data => {
        this.channel = data;
      });
  }

  reset() {
    this.channelRegistrationForm.reset();
  }
}
