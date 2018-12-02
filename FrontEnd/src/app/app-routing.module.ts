import { AdminSettopboxManagementComponent } from './Modules/Settop_Box/admin-settopbox-management/admin-settopbox-management.component';
import { AdminVideoManagementComponent } from './Modules/VOD/admin-video-management/admin-video-management.component';
import { AdminPackageManagementComponent } from './Modules/Packages/admin-package-management/admin-package-management.component';
import { AdminChannelManagementComponent } from './Modules/Channels/admin-channel-management/admin-channel-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Modules/Operators/admin-operator-management/admin-operator-management.component';
import { AdminCustomerManagementComponent } from './Modules/Customers/admin-customer-management/admin-customer-management.component';
import { HomeComponent } from './home/home.component';
import { AdminRetailerManagementComponent } from './Modules/Retailers/admin-retailer-management/admin-retailer-management.component';
// tslint:disable-next-line:max-line-length
import { AdminDistributorManagementComponent } from './Modules/Distributors/admin-distributor-management/admin-distributor-management.component';

const routes: Routes = [
  // TO-DO : need to change this to home component
  { path: 'admindashboard', component: AdminDashboardComponent },
  {
    path: 'adminoperatormanagement',
    component: AdminOperatorManagementComponent
  },
  {
    path: 'adminretailermanagement',
    component: AdminRetailerManagementComponent
  },
  {
    path: 'admindistributormanagement',
    component: AdminDistributorManagementComponent
  },
  {
    path: 'admincustomermanagement',
    component: AdminCustomerManagementComponent
  },
  {
    path: 'adminchannelmanagement',
    component: AdminChannelManagementComponent
  },
  {
    path: 'adminpackagemanagement',
    component: AdminPackageManagementComponent
  },
  {
    path: 'adminvideomanagement',
    component: AdminVideoManagementComponent
  },
  {
    path: 'adminsettopboxmanagement',
    component: AdminSettopboxManagementComponent
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/admindashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
