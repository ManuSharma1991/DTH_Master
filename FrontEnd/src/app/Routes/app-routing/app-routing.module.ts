import { AdminCustomerManagementComponent } from './../../Components/admin-customer-management/admin-customer-management.component';
// tslint:disable-next-line:max-line-length
import { AdminDistributorManagementComponent } from './../../Components/admin-distributor-management/admin-distributor-management.component';
import { AdminRetailerManagementComponent } from './../../Components/admin-retailer-management/admin-retailer-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../../Components/home/home.component';
import { AdminDashboardComponent } from './../../Components/admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './../../Components/admin-operator-management/admin-operator-management.component';
import { OperatorDetailedViewComponent } from 'src/app/Components/operator-detailed-view/operator-detailed-view.component';
import { OperatorViewComponent } from 'src/app/Components/operator-view/operator-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
