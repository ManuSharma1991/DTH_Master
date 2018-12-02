import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
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
