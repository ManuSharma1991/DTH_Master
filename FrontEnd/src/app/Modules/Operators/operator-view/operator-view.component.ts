import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Operator } from '../operator';

@Component({
  selector: 'app-operator-view',
  templateUrl: './operator-view.component.html',
  styleUrls: ['./operator-view.component.css']
})
export class OperatorViewComponent implements OnInit {
  operatorList: Operator[];
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
      this.operatorList = data.Operator;
    });
  }

  reset() {
    this.filter = '';
  }
}
