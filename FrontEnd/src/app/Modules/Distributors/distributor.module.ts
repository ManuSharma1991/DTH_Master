import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { DistributorViewComponent } from '../../Modules/Distributors/distributor-view/distributor-view.component';
import { DistributorRegistrationComponent } from '../../Modules/Distributors/distributor-registration/distributor-registration.component';

@NgModule({
  imports: [CommonModule, DistributorRoutingModule, SharedModule],
  declarations: [DistributorViewComponent, DistributorRegistrationComponent],
  exports: [DistributorViewComponent, DistributorRegistrationComponent]
})
export class DistributorModule {}
