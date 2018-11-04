import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../../Components/home/home.component';
import { AdminDashboardComponent } from './../../Components/admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './../../Components/admin-operator-management/admin-operator-management.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'adminoperatormanagement', component: AdminOperatorManagementComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
