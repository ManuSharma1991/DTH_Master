import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-settopbox-management',
  templateUrl: './admin-settopbox-management.component.html',
  styleUrls: ['./admin-settopbox-management.component.css']
})
export class AdminSettopboxManagementComponent implements OnInit {
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
