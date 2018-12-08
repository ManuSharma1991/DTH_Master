import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-distributor-management',
  templateUrl: './admin-distributor-management.component.html',
  styleUrls: ['./admin-distributor-management.component.css']
})
export class AdminDistributorManagementComponent implements OnInit {
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
