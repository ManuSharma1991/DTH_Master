import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    OperatorUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
