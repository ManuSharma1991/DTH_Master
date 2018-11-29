import { Component, OnInit } from '@angular/core';
import { Operator } from 'src/app/Modules/Operators/operator';
import { OperatorService } from 'src/app/Modules/Operators/operator.service';

@Component({
  selector: 'app-retailer-view',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerViewComponent implements OnInit {
  operatorList: Operator[];
  constructor(private operatorService: OperatorService) {}

  ngOnInit() {
    this.operatorService
      .getAllOperators()
      .subscribe(data => (this.operatorList = data));
    console.log(this.operatorList);
  }
}
