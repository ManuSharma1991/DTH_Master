import { Test2Service } from './Services/Utilities/test2.service';
// tslint:disable-next-line:max-line-length
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Modules/Operators/admin-operator-management/admin-operator-management.component';
import { AdminRetailerManagementComponent } from './admin-retailer-management/admin-retailer-management.component';
import { AdminDistributorManagementComponent } from './admin-distributor-management/admin-distributor-management.component';
import { AdminCustomerManagementComponent } from './Modules/Customers/admin-customer-management/admin-customer-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/admindashboard', pathMatch: 'full' }, // TO-DO : need to change this to home component
  { path: 'admindashboard', component: AdminDashboardComponent },
  {
    path: 'adminoperatormanagement',
    component: AdminOperatorManagementComponent,
    resolve: { Operator: Test2Service }
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
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
