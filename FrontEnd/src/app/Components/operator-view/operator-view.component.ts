import { Operator } from './../../Models/operator';
import { OperatorService } from './../../Services/Operator/operator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-view',
  templateUrl: './operator-view.component.html',
  styleUrls: ['./operator-view.component.css']
})
export class OperatorViewComponent implements OnInit {

  operatorList: Operator[];
  errmessage: string;
  constructor(private operatorService: OperatorService) { }

  ngOnInit() {
    this.operatorService.viewOperators().subscribe((data) => {
      console.log(data);
      this.operatorList = data;
    }, (error) => {
      this.errmessage = 'Details of Operators can\'t be loaded due to server error';
    });
  }

}
