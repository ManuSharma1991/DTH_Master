import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customerList: Customer[];
  constructor(private route: ActivatedRoute) {}
  filter;
  key = 'firstname';
  reverse = false;
  p = 1;
  itemsPerPage = 5;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.customerList = data.Customer;
    });
  }

  reset() {
    this.filter = '';
  }
}
