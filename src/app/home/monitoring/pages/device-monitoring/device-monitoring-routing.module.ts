import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceMonitoringPage } from './device-monitoring.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceMonitoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceMonitoringPageRoutingModule {}
