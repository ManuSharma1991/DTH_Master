// tslint:disable-next-line:max-line-length
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../../Components/home/home.component';
import { OperatorDetailedViewComponent } from 'src/app/Components/Operator/operator-detailed-view/operator-detailed-view.component';
import { AdminDashboardComponent } from 'src/app/Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from 'src/app/Components/Admin/admin-operator-management/admin-operator-management.component';
import { AdminRetailerManagementComponent } from 'src/app/Components/Admin/admin-retailer-management/admin-retailer-management.component';
// tslint:disable-next-line:max-line-length
import { AdminDistributorManagementComponent } from 'src/app/Components/Admin/admin-distributor-management/admin-distributor-management.component';
import { AdminCustomerManagementComponent } from 'src/app/Components/Admin/admin-customer-management/admin-customer-management.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/admindashboard', pathMatch: 'full' }, // TO-DO : need to change this to home component
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'operatordetailedview/:operatorID', component: OperatorDetailedViewComponent },
  { path: 'adminoperatormanagement', component: AdminOperatorManagementComponent },
  { path: 'adminretailermanagement', component: AdminRetailerManagementComponent },
  { path: 'admindistributormanagement', component: AdminDistributorManagementComponent },
  { path: 'admincustomermanagement', component: AdminCustomerManagementComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
