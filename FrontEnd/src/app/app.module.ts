// tslint:disable:max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Modules/Operators/admin-operator-management/admin-operator-management.component';
import { AdminCustomerManagementComponent } from './Modules/Customers/admin-customer-management/admin-customer-management.component';
import { AdminRetailerManagementComponent } from './Modules/Retailers/admin-retailer-management/admin-retailer-management.component';
import { AdminDistributorManagementComponent } from './Modules/Distributors/admin-distributor-management/admin-distributor-management.component';
import { AdminSettopboxManagementComponent } from './Modules/Settop_Box/admin-settopbox-management/admin-settopbox-management.component';
import { AdminVideoManagementComponent } from './Modules/VOD/admin-video-management/admin-video-management.component';
import { AdminPackageManagementComponent } from './Modules/Packages/admin-package-management/admin-package-management.component';
import { AdminChannelManagementComponent } from './Modules/Channels/admin-channel-management/admin-channel-management.component';

import { SharedModule } from './Modules/Shared/shared/shared.module';
import { OperatorsModule } from './Modules/Operators/operators.module';
import { CustomersModule } from './Modules/Customers/customers.module';
import { RetailerModule } from './Modules/Retailers/retailer.module';
import { DistributorModule } from './Modules/Distributors/distributor.module';
import { SettopboxModule } from './Modules/Settop_Box/settopbox.module';
import { VideoModule } from './Modules/VOD/video.module';
import { PackageModule } from './Modules/Packages/package.module';
import { ChannelModule } from './Modules/Channels/channel.module';

import { UtilityService } from './Services/Utilities/utility.service';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminOperatorManagementComponent,
    AdminRetailerManagementComponent,
    AdminCustomerManagementComponent,
    AdminDistributorManagementComponent,
    AdminSettopboxManagementComponent,
    AdminChannelManagementComponent,
    AdminPackageManagementComponent,
    AdminVideoManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OperatorsModule,
    CustomersModule,
    RetailerModule,
    SharedModule,
    DistributorModule,
    ChannelModule,
    PackageModule,
    VideoModule,
    SettopboxModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
