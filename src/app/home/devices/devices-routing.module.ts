import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesPage } from './devices.page';

const routes: Routes = [
  {
    path: '',
    component: DevicesPage
  },
  {
    path: 'show-device-configuration',
    loadChildren: () => import('./pages/show-device-configuration/show-device-configuration.module').then( m => m.ShowDeviceConfigurationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesPageRoutingModule {}
