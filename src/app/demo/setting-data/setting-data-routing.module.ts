import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'company',
        loadComponent: () => import('./company/company.component')
      },
      {
        path: 'car',
        loadComponent: () => import('./car/car.component')
      },
      {
        path: 'parts',
        loadComponent: () => import('./parts/parts.component')
      },
      {
        path: 'customer',
        loadComponent: () => import('./customer/customer.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingDataRoutingModule { }
