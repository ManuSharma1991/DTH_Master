import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-operator-management',
  templateUrl: './admin-operator-management.component.html',
  styleUrls: ['./admin-operator-management.component.css']
})
export class AdminOperatorManagementComponent implements OnInit {
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
