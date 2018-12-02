import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Retailer } from '../retailer';

@Component({
  selector: 'app-retailer-view',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerViewComponent implements OnInit {
  retailerList: Retailer[];
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
      this.retailerList = data.Retailer;
    });
  }

  reset() {
    this.filter = '';
  }
}
