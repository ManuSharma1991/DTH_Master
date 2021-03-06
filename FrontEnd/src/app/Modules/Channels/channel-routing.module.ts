import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminChannelManagementComponent } from './admin-channel-management/admin-channel-management.component';
import { ChannelRegistrationComponent } from './channel-registration/channel-registration.component';
import { ChannelViewComponent } from './channel-view/channel-view.component';
import { ChannelListService } from './Resolvers/channel-list.service';
import { ChannelDetailedViewComponent } from './channel-detailed-view/channel-detailed-view.component';
import { ChannelOneService } from './Resolvers/channel-one.service';
import { ChannelCategoryListService } from './Resolvers/channel-category-list.service';

const channelRoutes: Routes = [
  {
    path: '',
    component: AdminChannelManagementComponent,
    children: [
      {
        path: 'channelregister',
        component: ChannelRegistrationComponent
      },
      {
        path: 'channellist',
        component: ChannelViewComponent,
        resolve: { Channel: ChannelListService, ChannelCategory: ChannelCategoryListService }
      },
      {
        path: 'channeldetailedview/:channelnumber',
        component: ChannelDetailedViewComponent,
        resolve: { Channel: ChannelOneService }
      },
      {
        path: 'channelupdate/:channelnumber',
        component: ChannelDetailedViewComponent,
        resolve: { Channel: ChannelOneService }
      },
      {
        path: 'channeldelete/:channelnumber',
        component: ChannelDetailedViewComponent,
        resolve: { Channel: ChannelOneService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(channelRoutes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
