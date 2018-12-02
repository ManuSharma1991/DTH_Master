import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { ChannelViewComponent } from '../../Modules/Channels/channel-view/channel-view.component';
import { ChannelRegistrationComponent } from '../../Modules/Channels/channel-registration/channel-registration.component';

@NgModule({
  imports: [CommonModule, ChannelRoutingModule, SharedModule],
  declarations: [ChannelViewComponent, ChannelRegistrationComponent],
  exports: [ChannelViewComponent, ChannelRegistrationComponent]
})
export class ChannelModule {}
