import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverDevicesOnRoomsPage } from './discover-devices-on-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverDevicesOnRoomsPage
  },
  {
    path: 'show-device-configuration',
    loadChildren: () => import('./../../../devices/pages/show-device-configuration/show-device-configuration.module').then( m => m.ShowDeviceConfigurationPageModule)

    //loadChildren: () => import('./devices').then( m => m.ShowDeviceConfigurationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverDevicesOnRoomsPageRoutingModule {}
