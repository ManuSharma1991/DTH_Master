import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Modules/Operators/admin-operator-management/admin-operator-management.component';
import { AdminDistributorManagementComponent } from './admin-distributor-management/admin-distributor-management.component';
import { AdminCustomerManagementComponent } from './Modules/Customers/admin-customer-management/admin-customer-management.component';
import { HomeComponent } from './home/home.component';
import { AdminRetailerManagementComponent } from './Modules/Retailers/admin-retailer-management/admin-retailer-management.component';
import { OperatorOneService } from './Modules/Operators/Resolvers/operator-one.service';
import { RetailerOneService } from './Modules/Retailers/Resolvers/retailer-one.service';

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
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/admindashboard', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
