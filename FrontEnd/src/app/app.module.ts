import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomerRegistrationComponent } from './Components/customer-registration/customer-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
