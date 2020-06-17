import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchsetupPage } from './switchsetup.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchsetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchsetupPageRoutingModule {}
