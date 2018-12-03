import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageRoutingModule } from './package-routing.module';
import { SharedModule } from '../Shared/shared/shared.module';
import { PackageViewComponent } from '../../Modules/Packages/package-view/package-view.component';
import { PackageRegistrationComponent } from '../../Modules/Packages/package-registration/package-registration.component';
import { PackageDetailedViewComponent } from '../../Modules/Packages/package-detailed-view/package-detailed-view.component';
import { PackageUpdateComponent } from '../../Modules/Packages/package-update/package-update.component';

@NgModule({
  imports: [CommonModule, PackageRoutingModule, SharedModule],
  declarations: [PackageViewComponent, PackageRegistrationComponent, PackageDetailedViewComponent, PackageUpdateComponent],
  exports: [PackageViewComponent, PackageRegistrationComponent]
})
export class PackageModule {}
