import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminVideoManagementComponent } from './admin-video-management/admin-video-management.component';
import { VideoRegistrationComponent } from './video-registration/video-registration.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { VideoListService } from './Resolvers/video-list.service';
import { VideoDetailedViewComponent } from './video-detailed-view/video-detailed-view.component';
import { VideoOneService } from './Resolvers/video-one.service';

const videoRoutes: Routes = [
  {
    path: '',
    component: AdminVideoManagementComponent,
    children: [
      {
        path: 'videoregister',
        component: VideoRegistrationComponent
      },
      {
        path: 'videolist',
        component: VideoViewComponent,
        resolve: { Video: VideoListService }
      },
      {
        path: 'videodetailedview/:videoID',
        component: VideoDetailedViewComponent,
        resolve: { Video: VideoOneService }
      },
      {
        path: 'videoupdate/:videoID',
        component: VideoDetailedViewComponent,
        resolve: { Video: VideoOneService }
      },
      {
        path: 'videodelete/:videoID',
        component: VideoDetailedViewComponent,
        resolve: { Video: VideoOneService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(videoRoutes)],
  exports: [RouterModule]
})
export class VideoRoutingModule {}
