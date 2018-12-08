import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPackageManagementComponent } from './admin-package-management/admin-package-management.component';
import { PackageRegistrationComponent } from './package-registration/package-registration.component';
import { PackageViewComponent } from './package-view/package-view.component';
import { PackageListService } from './Resolvers/package-list.service';
import { PackageDetailedViewComponent } from './package-detailed-view/package-detailed-view.component';
import { PackageOneService } from './Resolvers/package-one.service';

const packageRoutes: Routes = [
  {
    path: '',
    component: AdminPackageManagementComponent,
    children: [
      {
        path: 'packageregister',
        component: PackageRegistrationComponent
      },
      {
        path: 'packagelist',
        component: PackageViewComponent,
        resolve: { Package: PackageListService }
      },
      {
        path: 'packagedetailedview/:packageID',
        component: PackageDetailedViewComponent,
        resolve: { Package: PackageOneService }
      },
      {
        path: 'packageupdate/:packageID',
        component: PackageDetailedViewComponent,
        resolve: { Package: PackageOneService }
      },
      {
        path: 'packagedelete/:packageID',
        component: PackageDetailedViewComponent,
        resolve: { Package: PackageOneService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(packageRoutes)],
  exports: [RouterModule]
})
export class PackageRoutingModule {}
