import { OperatorService } from './../../../Services/Operator/operator.service';
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

  constructor(
    private operatorSerice: OperatorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.operator = data.Operator;
    });
  }

  update(operator: Operator) {
    this.flag = false;
    this.operatorSerice.updateOperator(operator);
  }

  delete(OperatorID: String) {
    return this.operatorSerice.deleteOperator(OperatorID).subscribe(data => {
      this.router.navigateByUrl('/adminoperatormanagement');
    });
  }
}
