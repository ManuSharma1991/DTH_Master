import { SettopboxDetailedViewComponent } from './settopbox-detailed-view/settopbox-detailed-view.component';
import { SettopboxViewComponent } from './settopbox-view/settopbox-view.component';
import { SettopboxRegistrationComponent } from './settopbox-registration/settopbox-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettopboxRoutingModule } from './settopbox-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { SettopboxUpdateComponent } from './settopbox-update/settopbox-update.component';

@NgModule({
  imports: [CommonModule, SettopboxRoutingModule, SharedModule],
  declarations: [
    SettopboxRegistrationComponent,
    SettopboxViewComponent,
    SettopboxDetailedViewComponent,
    SettopboxUpdateComponent
  ]
})
export class SettopboxModule {}
