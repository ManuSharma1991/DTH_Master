import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './Routes/app-routing/app-routing.module';
import { MeridianPipe } from './Validators/Pipes/meridian.pipe';
import { OperatorRegistrationComponent } from './Components/Operator/operator-registration/operator-registration.component';
import { OperatorViewComponent } from './Components/Operator/operator-view/operator-view.component';
import { OperatorDetailedViewComponent } from './Components/Operator/operator-detailed-view/operator-detailed-view.component';
import { OperatorUpdateComponent } from './Components/Operator/operator-update/operator-update.component';
import { RetailerRegistrationComponent } from './Components/Retailer/retailer-registration/retailer-registration.component';
import { RetailerViewComponent } from './Components/Retailer/retailer-view/retailer-view.component';
import { RetailerDetailedViewComponent } from './Components/Retailer/retailer-detailed-view/retailer-detailed-view.component';
// tslint:disable-next-line:max-line-length
import { CustomerRegistrationComponent } from './Components/Customer/customer-registration/customer-registration.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Components/Admin/admin-operator-management/admin-operator-management.component';
import { AdminRetailerManagementComponent } from './Components/Admin/admin-retailer-management/admin-retailer-management.component';
// tslint:disable-next-line:max-line-length
import { AdminDistributorManagementComponent } from './Components/Admin/admin-distributor-management/admin-distributor-management.component';
import { AdminCustomerManagementComponent } from './Components/Admin/admin-customer-management/admin-customer-management.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
