import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-video-management',
  templateUrl: './admin-video-management.component.html',
  styleUrls: ['./admin-video-management.component.css']
})
export class AdminVideoManagementComponent implements OnInit {
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
