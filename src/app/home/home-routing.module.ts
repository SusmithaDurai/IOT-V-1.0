import { DevicesettingPage } from './../devicesetting/devicesetting.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DevicesetupPage } from '../devicesetup/devicesetup.page';

const routes: Routes = [

  {
    path:'devicesetup',
    children: [
      {
        path: '',
        loadChildren: () => import('../devicesetup/devicesetup.module').then(m => m.DevicesetupPageModule),
      }
    ]

  },
  {
    path:'devicesetting',
    children: [
      {
        path: '',
        loadChildren: () => import('../devicesetting/devicesetting.module').then(m => m.DevicesettingPageModule),
      }
    ]

  },
  {
    path:'dashboard',
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),
      }
    ]

  },

  {
    path: '',
    redirectTo: '/home/devicesetup',
    pathMatch: 'full'
  }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
