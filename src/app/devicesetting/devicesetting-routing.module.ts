import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesettingPage } from './devicesetting.page';

const routes: Routes = [
  {
    path: '',
    component: DevicesettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesettingPageRoutingModule {}
