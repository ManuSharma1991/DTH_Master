import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { ChannelViewComponent } from '../../Modules/Channels/channel-view/channel-view.component';
import { ChannelRegistrationComponent } from '../../Modules/Channels/channel-registration/channel-registration.component';
import { ChannelDetailedViewComponent } from '../../Modules/Channels/channel-detailed-view/channel-detailed-view.component';
import { ChannelUpdateComponent } from '../../Modules/Channels/channel-update/channel-update.component';

@NgModule({
  imports: [CommonModule, ChannelRoutingModule, SharedModule],
  declarations: [ChannelViewComponent, ChannelRegistrationComponent, ChannelDetailedViewComponent, ChannelUpdateComponent],
  exports: [ChannelViewComponent, ChannelRegistrationComponent]
})
export class ChannelModule {}
