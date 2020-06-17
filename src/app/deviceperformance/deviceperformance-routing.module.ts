import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceperformancePage } from './deviceperformance.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceperformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceperformancePageRoutingModule {}
