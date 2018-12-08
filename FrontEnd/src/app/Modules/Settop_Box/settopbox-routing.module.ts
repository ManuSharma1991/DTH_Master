import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSettopboxManagementComponent } from './admin-settopbox-management/admin-settopbox-management.component';
import { SettopboxRegistrationComponent } from './settopbox-registration/settopbox-registration.component';
import { SettopboxViewComponent } from './settopbox-view/settopbox-view.component';
import { SettopboxListService } from './Resolvers/settopbox-list.service';
import { SettopboxDetailedViewComponent } from './settopbox-detailed-view/settopbox-detailed-view.component';
import { SettopboxOneService } from './Resolvers/settopbox-one.service';

const settopboxRoutes: Routes = [
  {
    path: '',
    component: AdminSettopboxManagementComponent,
    children: [
      {
        path: 'settopboxregister',
        component: SettopboxRegistrationComponent
      },
      {
        path: 'settopboxlist',
        component: SettopboxViewComponent,
        resolve: { Settopbox: SettopboxListService }
      },
      {
        path: 'settopboxdetailedview/:settopboxID',
        component: SettopboxDetailedViewComponent,
        resolve: { Settopbox: SettopboxOneService }
      },
      {
        path: 'settopboxupdate/:settopboxID',
        component: SettopboxDetailedViewComponent,
        resolve: { Settopbox: SettopboxOneService }
      },
      {
        path: 'settopboxdelete/:settopboxID',
        component: SettopboxDetailedViewComponent,
        resolve: { Settopbox: SettopboxOneService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(settopboxRoutes)],
  exports: [RouterModule]
})
export class SettopboxRoutingModule {}
