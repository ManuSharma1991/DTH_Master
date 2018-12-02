import { TestService } from 'src/app/Services/Utilities/test.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeridianPipe } from './Validators/Pipes/meridian.pipe';
import { RetailerRegistrationComponent } from './Components/Retailer/retailer-registration/retailer-registration.component';
import { RetailerViewComponent } from './Components/Retailer/retailer-view/retailer-view.component';
import { RetailerDetailedViewComponent } from './Components/Retailer/retailer-detailed-view/retailer-detailed-view.component';
// tslint:disable-next-line:max-line-length
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Modules/Operators/admin-operator-management/admin-operator-management.component';
import { OperatorRegistrationComponent } from './Modules/Operators/operator-registration/operator-registration.component';
import { OperatorViewComponent } from './Modules/Operators/operator-view/operator-view.component';
import { OperatorDetailedViewComponent } from './Modules/Operators/operator-detailed-view/operator-detailed-view.component';
import { OperatorUpdateComponent } from './Modules/Operators/operator-update/operator-update.component';
import { AdminRetailerManagementComponent } from './admin-retailer-management/admin-retailer-management.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminOperatorManagementComponent,
    OperatorRegistrationComponent,
    OperatorViewComponent,
    OperatorDetailedViewComponent,
    MeridianPipe,
    OperatorUpdateComponent,
    AdminRetailerManagementComponent,
    AdminDistributorManagementComponent,
    AdminCustomerManagementComponent,
    RetailerRegistrationComponent,
    RetailerViewComponent,
    RetailerDetailedViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    OperatorsModule,
    CustomersModule,
    Ng2SearchPipeModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [OperatorService, TestService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
