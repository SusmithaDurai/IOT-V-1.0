import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDeviceConfigurationPage } from './show-device-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDeviceConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDeviceConfigurationPageRoutingModule {}
