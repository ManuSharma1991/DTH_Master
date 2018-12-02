import { OperatorListService } from './Resolvers/operator-list.service';
import { OperatorRegistrationComponent } from './operator-registration/operator-registration.component';
import { OperatorViewComponent } from './operator-view/operator-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorDetailedViewComponent } from './operator-detailed-view/operator-detailed-view.component';
import { AdminOperatorManagementComponent } from './admin-operator-management/admin-operator-management.component';
import { OperatorOneService } from './Resolvers/operator-one.service';

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
        resolve: { Operator: OperatorListService }
      },
      {
        path: 'operatordetailedview/:operatorID',
        component: OperatorDetailedViewComponent,
        resolve: { Operator: OperatorOneService }
      },
      {
        path: 'operatorupdate/:operatorID',
        component: OperatorDetailedViewComponent,
        resolve: { Operator: OperatorOneService }
      },
      {
        path: 'operatordelete/:operatorID',
        component: OperatorDetailedViewComponent,
        resolve: { Operator: OperatorOneService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(operatorRoutes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule {}
