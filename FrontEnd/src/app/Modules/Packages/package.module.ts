import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { PackageViewComponent } from '../../Modules/Packages/package-view/package-view.component';
import { PackageRegistrationComponent } from '../../Modules/Packages/package-registration/package-registration.component';

@NgModule({
  imports: [CommonModule, PackageRoutingModule, SharedModule],
  declarations: [PackageViewComponent, PackageRegistrationComponent],
  exports: [PackageViewComponent, PackageRegistrationComponent]
})
export class PackageModule {}
