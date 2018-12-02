import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';

@NgModule({
  imports: [CommonModule, VideoRoutingModule, SharedModule],
  declarations: []
})
export class VideoModule {}
