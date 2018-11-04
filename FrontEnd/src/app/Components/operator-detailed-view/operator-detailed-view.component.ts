import { OperatorService } from './../../Services/Operator/operator.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operator } from 'src/app/Models/operator';

@Component({
  selector: 'app-operator-detailed-view',
  templateUrl: './operator-detailed-view.component.html',
  styleUrls: ['./operator-detailed-view.component.css']
})
export class OperatorDetailedViewComponent implements OnInit {
  operator: Operator;
  flag = true;
  constructor(private operatorSerice: OperatorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const operatorID = this.route.snapshot.paramMap.get('operatorID');
    this.operator = this.operatorSerice.getOperatorByID(operatorID);
  }

  update(operator: Operator) {
    this.flag = false;
    this.operatorSerice.update(operator);
  }

  delete(OperatorID: String) {
    this.operatorSerice.deleteOperator(OperatorID);
    this.router.navigateByUrl('/adminoperatormanagement');
  }

}
