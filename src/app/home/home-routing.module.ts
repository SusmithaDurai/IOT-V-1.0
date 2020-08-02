import { DeviceSetUpPage } from './../device-setup/device-setup.page';
import { DashboardPage } from './../dashboard/dashboard.page';
import { DeviceConfigPage } from './../device-config/device-config.page';
import { DeviceSettingPage } from '../device-setting/device-setting.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SwitchsetupPage } from '../switch-setup/switch-setup.page';

const routes: Routes = [

  {
    path:'',      
    children: [
      {
        path: '',
        component:DeviceSetUpPage,
        loadChildren: () => import('../device-setup/device-setup.module').then(m => m.DeviceSetUpPageModule),
      }
    ]

  },
  {
    path:'device-setting',
    //component:DeviceConfigPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../device-setting/device-setting.module').then(m => m.DeviceSettingPageModule),
      }
    ]

  },
  {
    path:'dashboard',
    component:DashboardPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),
      }
    ]

  },
  {
    path:'device-setup',
    component:DeviceSetUpPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../device-setup/device-setup.module').then(m => m.DeviceSetUpPageModule),
      }
    ]

  }
  //,
  // {
  //   path:'switch-setup',
  //   component:SwitchsetupPage,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('../switch-setup/switch-setup.module').then(m => m.SwitchsetupPageModule),
  //     }
  //   ]

  // }
 
  // {
  //   path: '',
  //   redirectTo: '/home/device-setup',
  //   pathMatch: 'full'
  // }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
