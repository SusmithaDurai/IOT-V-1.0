import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children : [
      {
        path: 'devicesetup',
        loadChildren: () => import('../devicesetup/devicesetup.module').then(m => m.DevicesetupPageModule)
      },
      {
        path: 'deviceperformance',
        loadChildren: () => import('../deviceperformance/deviceperformance.module').then(m => m.DeviceperformancePageModule)
      },
      {
        path: 'devicesetting',
        loadChildren: () => import('../devicesetting/devicesetting.module').then(m => m.DevicesettingPageModule)
      },
      {
        path: 'device-config',
        loadChildren: () => import('../device-config/device-config.module').then( m => m.DeviceConfigPageModule)
      },
      {
        path: 'switchsetup',
        loadChildren: () => import('../switchsetup/switchsetup.module').then( m => m.SwitchsetupPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: '',
        redirectTo: '/home/devicesetup',
        pathMatch: 'full'
      }
      // ,
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // }
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
