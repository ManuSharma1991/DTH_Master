import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-customer-management',
  templateUrl: './admin-customer-management.component.html',
  styleUrls: ['./admin-customer-management.component.css']
})
export class AdminCustomerManagementComponent implements OnInit {
  constructor() {}
  flag = false;
  ngOnInit() {}
  onActivate(event: any) {
    this.flag = true;
  }

  onDeactivate(event: any) {
    this.flag = false;
  }
}
