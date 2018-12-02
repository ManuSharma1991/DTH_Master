import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-retailer-management',
  templateUrl: './admin-retailer-management.component.html',
  styleUrls: ['./admin-retailer-management.component.css']
})
export class AdminRetailerManagementComponent implements OnInit {
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
