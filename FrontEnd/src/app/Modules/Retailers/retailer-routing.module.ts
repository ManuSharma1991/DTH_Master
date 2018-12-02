import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRetailerManagementComponent } from './admin-retailer-management/admin-retailer-management.component';
import { RetailerRegistrationComponent } from './retailer-registration/retailer-registration.component';
import { RetailerViewComponent } from './retailer-view/retailer-view.component';
import { RetailerDetailedViewComponent } from './retailer-detailed-view/retailer-detailed-view.component';
import { RetailerListService } from './Resolvers/retailer-list.service';
import { RetailerOneService } from './Resolvers/retailer-one.service';

const retailerRoutes: Routes = [
  {
    path: '',
    component: AdminRetailerManagementComponent,
    children: [
      {
        path: 'retailerregister',
        component: RetailerRegistrationComponent
      },
      {
        path: 'retailerlist',
        component: RetailerViewComponent,
        resolve: { Retailer: RetailerListService }
      },
      {
        path: 'retailerdetailedview/:retailerID',
        component: RetailerDetailedViewComponent,
        resolve: { Retailer: RetailerOneService }
      },
      {
        path: 'retailerupdate/:retailerID',
        component: RetailerDetailedViewComponent,
        resolve: { Retailer: RetailerOneService }
      },
      {
        path: 'retailerdelete/:retailerID',
        component: RetailerDetailedViewComponent,
        resolve: { Retailer: RetailerOneService }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(retailerRoutes)],
  exports: [RouterModule]
})
export class RetailerRoutingModule {}
