import { SharedModule } from './../Shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';

import { OperatorRegistrationComponent } from '../../Modules/Operators/operator-registration/operator-registration.component';
import { OperatorViewComponent } from '../../Modules/Operators/operator-view/operator-view.component';
import { OperatorUpdateComponent } from '../../Modules/Operators/operator-update/operator-update.component';
import { OperatorDetailedViewComponent } from '../../Modules/Operators/operator-detailed-view/operator-detailed-view.component';
import { MeridianPipe } from '../Shared/shared/Validators/Pipes/meridian.pipe';

@NgModule({
  imports: [CommonModule, OperatorsRoutingModule, SharedModule],
  declarations: [
    OperatorRegistrationComponent,
    MeridianPipe,
    OperatorViewComponent,
    OperatorUpdateComponent,
    OperatorDetailedViewComponent
  ],
  exports: [
    OperatorRegistrationComponent,
    OperatorViewComponent,
    OperatorUpdateComponent,
    OperatorDetailedViewComponent
  ]
})
export class OperatorsModule {}
