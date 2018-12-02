import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// tslint:disable-next-line:max-line-length
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Modules/Operators/admin-operator-management/admin-operator-management.component';
import { AdminDistributorManagementComponent } from './admin-distributor-management/admin-distributor-management.component';
import { AdminCustomerManagementComponent } from './Modules/Customers/admin-customer-management/admin-customer-management.component';
import { OperatorsModule } from './Modules/Operators/operators.module';
import { CustomersModule } from './Modules/Customers/customers.module';
import { UtilityService } from './Services/Utilities/utility.service';
import { OperatorService } from './Modules/Operators/operator.service';
import { CustomerRegistrationComponent } from './Modules/Customers/customer-registration/customer-registration.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RetailerModule } from './Modules/Retailers/retailer.module';
import { AdminRetailerManagementComponent } from './Modules/Retailers/admin-retailer-management/admin-retailer-management.component';
import { SharedModule } from './Modules/Shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminOperatorManagementComponent,
    AdminRetailerManagementComponent,
    AdminDistributorManagementComponent,
    AdminCustomerManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OperatorsModule,
    CustomersModule,
    RetailerModule,
    SharedModule
  ],
  providers: [OperatorService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
