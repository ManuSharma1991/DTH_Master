import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCustomerManagementComponent } from './admin-customer-management/admin-customer-management.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerListService } from './Resolvers/customer-list.service';
import { CustomerDetailedViewComponent } from './customer-detailed-view/customer-detailed-view.component';
import { CustomerOneService } from './Resolvers/customer-one.service';

const customerRoutes: Routes = [
  {
    path: '',
    component: AdminCustomerManagementComponent,
    children: [
      {
        path: 'customerregister',
        component: CustomerRegistrationComponent
      },
      {
        path: 'customerlist',
        component: CustomerViewComponent,
        resolve: { Customer: CustomerListService }
      },
      {
        path: 'customerdetailedview/:customerID',
        component: CustomerDetailedViewComponent,
        resolve: { Customer: CustomerOneService }
      },
      {
        path: 'customerupdate/:customerID',
        component: CustomerDetailedViewComponent,
        resolve: { Customer: CustomerOneService }
      },
      {
        path: 'customerdelete/:customerID',
        component: CustomerDetailedViewComponent,
        resolve: { Customer: CustomerOneService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
