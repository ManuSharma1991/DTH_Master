import { OperatorRegistrationComponent } from './operator-registration/operator-registration.component';
import { OperatorViewComponent } from './operator-view/operator-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorDetailedViewComponent } from './operator-detailed-view/operator-detailed-view.component';
import { TestService } from 'src/app/Services/Utilities/test.service';
import { AdminOperatorManagementComponent } from './admin-operator-management/admin-operator-management.component';
import { Test2Service } from 'src/app/Services/Utilities/test2.service';

const operatorRoutes: Routes = [
  {
    path: '',
    component: AdminOperatorManagementComponent,
    children: [
      {
        path: 'operatorregister',
        component: OperatorRegistrationComponent
      },
      {
        path: 'operatorlist',
        component: OperatorViewComponent,
        resolve: { Operator: Test2Service }
      },
      {
        path: 'operatordetailedview/:operatorID',
        component: OperatorDetailedViewComponent,
        resolve: { Operator: TestService }
      },
      {
        path: 'operatorupdate/:operatorID',
        component: OperatorDetailedViewComponent,
        resolve: { Operator: TestService }
      },
      {
        path: 'operatordelete/:operatorID',
        component: OperatorDetailedViewComponent,
        resolve: { Operator: TestService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(operatorRoutes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule {}
