import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDistributorManagementComponent } from './admin-distributor-management/admin-distributor-management.component';
import { DistributorRegistrationComponent } from './distributor-registration/distributor-registration.component';
import { DistributorViewComponent } from './distributor-view/distributor-view.component';
import { DistributorListService } from './Resolvers/distributor-list.service';
import { DistributorDetailedViewComponent } from './distributor-detailed-view/distributor-detailed-view.component';
import { DistributorOneService } from './Resolvers/distributor-one.service';

const distributorRoutes: Routes = [
  {
    path: '',
    component: AdminDistributorManagementComponent,
    children: [
      {
        path: 'distributorregister',
        component: DistributorRegistrationComponent
      },
      {
        path: 'distributorlist',
        component: DistributorViewComponent,
        resolve: { Distributor: DistributorListService }
      },
      {
        path: 'distributordetailedview/:distributorID',
        component: DistributorDetailedViewComponent,
        resolve: { Distributor: DistributorOneService }
      },
      {
        path: 'distributorupdate/:distributorID',
        component: DistributorDetailedViewComponent,
        resolve: { Distributor: DistributorOneService }
      },
      {
        path: 'distributordelete/:distributorID',
        component: DistributorDetailedViewComponent,
        resolve: { Distributor: DistributorOneService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(distributorRoutes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule {}
