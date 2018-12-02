import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { CustomerViewComponent } from '../../Modules/Customers/customer-view/customer-view.component';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, SharedModule],
  declarations: [CustomerViewComponent, CustomerRegistrationComponent],
  exports: [CustomerViewComponent, CustomerRegistrationComponent]
})
export class CustomersModule {}
