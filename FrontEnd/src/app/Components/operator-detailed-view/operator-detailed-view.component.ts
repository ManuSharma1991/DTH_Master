import { OperatorService } from './../../Services/Operator/operator.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Operator } from 'src/app/Models/operator';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-operator-detailed-view',
  templateUrl: './operator-detailed-view.component.html',
  styleUrls: ['./operator-detailed-view.component.css']
})
export class OperatorDetailedViewComponent implements OnInit {
  operator: Operator;
  flag = true;
  errmessage: string;

  constructor(private operatorSerice: OperatorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const operatorID = this.route.snapshot.paramMap.get('operatorID');
    console.log(operatorID);
    return this.operatorSerice.getOperatorByID(operatorID).subscribe(data => {
      this.operator = data;
      console.log(this.operator);
    }, (error) => {
      this.errmessage = 'Customer details by Id not exist';
    });
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
