import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverDevicesOnRoomsPage } from './discover-devices-on-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverDevicesOnRoomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverDevicesOnRoomsPageRoutingModule {}
