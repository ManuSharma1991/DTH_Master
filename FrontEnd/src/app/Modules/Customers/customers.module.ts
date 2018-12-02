import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, SharedModule],
  declarations: []
})
export class CustomersModule {}
