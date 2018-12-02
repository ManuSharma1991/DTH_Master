import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { VideoViewComponent } from '../../Modules/VOD/video-view/video-view.component';
import { VideoRegistrationComponent } from '../../Modules/VOD/video-registration/video-registration.component';

@NgModule({
  imports: [CommonModule, VideoRoutingModule, SharedModule],
  declarations: [VideoViewComponent, VideoRegistrationComponent],
  exports: [VideoViewComponent, VideoRegistrationComponent]
})
export class VideoModule {}
