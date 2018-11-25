import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/Services/Operator/operator.service';
import { Operator } from 'src/app/Models/operator';

@Component({
  selector: 'app-retailer-view',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerViewComponent implements OnInit {

  operatorList: Operator[];
  constructor(private operatorService: OperatorService) { }

  ngOnInit() {
    this.operatorService.viewOperators().subscribe((data) => this.operatorList = data);
    console.log(this.operatorList);
  }


}
