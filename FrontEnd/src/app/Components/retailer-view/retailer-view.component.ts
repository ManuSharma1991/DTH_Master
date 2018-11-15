import { Component, OnInit } from '@angular/core';
import { Operator } from './../../Models/operator';
import { OperatorService } from './../../Services/Operator/operator.service';

@Component({
  selector: 'app-retailer-view',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerViewComponent implements OnInit {

  operatorList: Operator[];
  constructor(private operatorService: OperatorService) { }

  ngOnInit() {
    this.operatorList = this.operatorService.viewOperators();
  }


}
