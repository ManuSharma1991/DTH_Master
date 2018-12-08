import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-package-management',
  templateUrl: './admin-package-management.component.html',
  styleUrls: ['./admin-package-management.component.css']
})
export class AdminPackageManagementComponent implements OnInit {
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
