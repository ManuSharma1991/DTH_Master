import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';

@NgModule({
  imports: [CommonModule, DistributorRoutingModule, SharedModule],
  declarations: []
})
export class DistributorModule {}
