import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-channel-management',
  templateUrl: './admin-channel-management.component.html',
  styleUrls: ['./admin-channel-management.component.css']
})
export class AdminChannelManagementComponent implements OnInit {
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
