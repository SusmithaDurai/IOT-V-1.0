import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverRoomsPage } from './discover-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverRoomsPage
    // [
    //   {
    //     path:'show-room-configuration',
    //     loadChildren: () => import('../show-room-configuration/show-room-configuration.module').then( m => m.ShowRoomConfigurationPageModule)

    //   }
    // ]
  },
  {
    path:'show-room-configuration',
     loadChildren: () => import('../show-room-configuration/show-room-configuration.module').then( m => m.ShowRoomConfigurationPageModule)

  },
  {
    path:'device-monitoring',
   loadChildren: () => import('../../../monitoring/pages/device-monitoring/device-monitoring.module').then( m => m.DeviceMonitoringPageModule)

  }
  // ,
  // {
  //   path: 'show-room-configuration',
  //   //component:ShowDeviceConfigurationPage
  //   loadChildren: () => import('./pages/show-room-configuration/show-room-configuration.module').then( m => m.ShowRoomConfigurationPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverRoomsPageRoutingModule {}
