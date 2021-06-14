import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusMonitoringPage } from './status-monitoring.page';

const routes: Routes = [
  {
    path: '',
    component: StatusMonitoringPage
  },
  {
    path:'device-monitoring',
   loadChildren: () => import('../device-monitoring/device-monitoring.module').then( m => m.DeviceMonitoringPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusMonitoringPageRoutingModule {}
