import { DeviceSetUpPage } from './../device-setup/device-setup.page';
import { DashboardPage } from './../dashboard/dashboard.page';
import { DeviceConfigPage } from './../device-config/device-config.page';
import { DeviceSettingPage } from '../device-setting/device-setting.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DiscoverDevicesOnRoomsPage } from './rooms/pages/discover-devices-on-rooms/discover-devices-on-rooms.page';
import { DiscoverRoomsPage } from './rooms/pages/discover-rooms/discover-rooms.page';

const routes: Routes = [

  {
    path:'/home',
    component:HomePage,
    children:[
      {
        path :'rooms',
        loadChildren: () => import('./rooms/pages/discover-rooms/discover-rooms.module').then( m => m.DiscoverRoomsPageModule)
      },
      {
        path: 'devices',
        //component:DiscoverDevicesOnRoomsPage
        loadChildren: () => import('./rooms/pages/discover-devices-on-rooms/discover-devices-on-rooms.module').then( m => m.DiscoverDevicesOnRoomsPageModule)
    
      },
      {
        path:'dashboard',
        component:DashboardPage
        //loadChildren:()=>import('/')
      }
    ]
  },

  {
    path:'',   
    redirectTo: '/home/rooms',
     pathMatch: 'full'
    
    //loadChildren: () => import('./rooms/rooms.module').then( m => m.RoomsPageModule)

  }
  // {
  //   path: 'rooms',
  //   //component:DiscoverRoomsPage,
  //   loadChildren: () => import('./rooms/rooms.module').then( m => m.RoomsPageModule)
  // },
  // {
  //   path: 'room',
  //   //component:DiscoverDevicesOnRoomsPage
  //   loadChildren: () => import('./rooms/pages/discover-devices-on-rooms/discover-devices-on-rooms.module').then( m => m.DiscoverDevicesOnRoomsPageModule)

  // },

  // {
  //   path: 'devices',
  //   loadChildren: () => import('./devices/devices.module').then( m => m.DevicesPageModule)
  // }
  
 
  // {
  //   path: '',
  //   redirectTo: '/home/rooms',
  //   pathMatch: 'full'
  // }
  // ,
  // {
  //   path:'device-setting',
  //   //component:DeviceConfigPage,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('../device-setting/device-setting.module').then(m => m.DeviceSettingPageModule),
  //     }
  //   ]

  // },
  // {
  //   path:'dashboard',
  //   component:DashboardPage,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),
  //     }
  //   ]

  // },
  // {
  //   path:'device-setup',
  //   component:DeviceSetUpPage,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('../device-setup/device-setup.module').then(m => m.DeviceSetUpPageModule),
  //     }
  //   ]

  // },
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
