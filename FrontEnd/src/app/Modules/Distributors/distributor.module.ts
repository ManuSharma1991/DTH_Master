import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { DistributorViewComponent } from '../../Modules/Distributors/distributor-view/distributor-view.component';
import { DistributorRegistrationComponent } from '../../Modules/Distributors/distributor-registration/distributor-registration.component';
import { DistributorDetailedViewComponent } from '../../Modules/Distributors/distributor-detailed-view/distributor-detailed-view.component';
import { DistributorUpdateComponent } from '../../Modules/Distributors/distributor-update/distributor-update.component';

@NgModule({
  imports: [CommonModule, DistributorRoutingModule, SharedModule],
  declarations: [DistributorViewComponent, DistributorRegistrationComponent, DistributorDetailedViewComponent, DistributorUpdateComponent],
  exports: [DistributorViewComponent, DistributorRegistrationComponent]
})
export class DistributorModule {}
