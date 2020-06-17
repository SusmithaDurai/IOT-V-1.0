import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesetupPage } from './devicesetup.page';

const routes: Routes = [
  {
    path: '',
    component: DevicesetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesetupPageRoutingModule {}
