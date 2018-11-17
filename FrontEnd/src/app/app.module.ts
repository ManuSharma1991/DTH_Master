import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomerRegistrationComponent } from './Components/customer-registration/customer-registration.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AppRoutingModule } from './Routes/app-routing/app-routing.module';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminOperatorManagementComponent } from './Components/admin-operator-management/admin-operator-management.component';
import { OperatorRegistrationComponent } from './Components/operator-registration/operator-registration.component';
import { OperatorViewComponent } from './Components/operator-view/operator-view.component';
import { OperatorDetailedViewComponent } from './Components/operator-detailed-view/operator-detailed-view.component';
import { MeridianPipe } from './Validators/Pipes/meridian.pipe';
import { OperatorUpdateComponent } from './Components/operator-update/operator-update.component';
import { AdminRetailerManagementComponent } from './Components/admin-retailer-management/admin-retailer-management.component';
import { AdminDistributorManagementComponent } from './Components/admin-distributor-management/admin-distributor-management.component';
import { AdminCustomerManagementComponent } from './Components/admin-customer-management/admin-customer-management.component';
import { RetailerRegistrationComponent } from './Components/retailer-registration/retailer-registration.component';
import { RetailerViewComponent } from './Components/retailer-view/retailer-view.component';
import { RetailerDetailedViewComponent } from './Components/retailer-detailed-view/retailer-detailed-view.component';

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
