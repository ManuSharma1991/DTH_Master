import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettopboxRoutingModule } from './settopbox-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';

@NgModule({
  imports: [CommonModule, SettopboxRoutingModule, SharedModule],
  declarations: []
})
export class SettopboxModule {}
