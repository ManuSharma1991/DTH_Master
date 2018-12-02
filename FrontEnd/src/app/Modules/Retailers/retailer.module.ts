import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerRegistrationComponent } from '../../Modules/Retailers/retailer-registration/retailer-registration.component';
import { RetailerViewComponent } from '../../Modules/Retailers/retailer-view/retailer-view.component';
import { RetailerUpdateComponent } from '../../Modules/Retailers/retailer-update/retailer-update.component';
import { RetailerDetailedViewComponent } from '../../Modules/Retailers/retailer-detailed-view/retailer-detailed-view.component';
import { SharedModule } from '../Shared/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, RetailerRoutingModule],
  declarations: [
    RetailerRegistrationComponent,
    RetailerViewComponent,
    RetailerUpdateComponent,
    RetailerDetailedViewComponent
  ],
  exports: [
    RetailerRegistrationComponent,
    RetailerViewComponent,
    RetailerUpdateComponent,
    RetailerDetailedViewComponent
  ]
})
export class RetailerModule {}
