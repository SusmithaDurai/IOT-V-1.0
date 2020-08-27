import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsPage } from './rooms.page';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'discover-rooms',
    pathMatch: 'full'
  },
  {
    path: 'discover-rooms',
    loadChildren: () => import('./pages/discover-rooms/discover-rooms.module').then( m => m.DiscoverRoomsPageModule)
  },
  {
    path: 'discover-devices-on-rooms',
    loadChildren: () => import('./pages/discover-devices-on-rooms/discover-devices-on-rooms.module').then( m => m.DiscoverDevicesOnRoomsPageModule)
   },
  {
    path: 'show-room-configuration',
    loadChildren: () => import('./pages/show-room-configuration/show-room-configuration.module').then( m => m.ShowRoomConfigurationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsPageRoutingModule {}
