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
  constructor(private operatorService: OperatorService) { }

  ngOnInit() {
    this.operatorList = this.operatorService.viewOperators();
  }

}
