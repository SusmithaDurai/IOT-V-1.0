import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowRoomConfigurationPage } from './show-room-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ShowRoomConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRoomConfigurationPageRoutingModule {}
