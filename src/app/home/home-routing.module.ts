
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DiscoverDevicesOnRoomsPage } from './rooms/pages/discover-devices-on-rooms/discover-devices-on-rooms.page';
import { DiscoverRoomsPage } from './rooms/pages/discover-rooms/discover-rooms.page';

const routes: Routes = [

  {
    path:'',
   component:HomePage,
    children:[
      {
        path :'rooms',
        loadChildren: () => import('./rooms/pages/discover-rooms/discover-rooms.module').then( m => m.DiscoverRoomsPageModule)
      },
      {
        path: 'devices',
        loadChildren: () => import('./rooms/pages/discover-devices-on-rooms/discover-devices-on-rooms.module').then( m => m.DiscoverDevicesOnRoomsPageModule)
    
      },
      {
        path: 'devices/:id',
        loadChildren: () => import('./rooms/pages/discover-devices-on-rooms/discover-devices-on-rooms.module').then( m => m.DiscoverDevicesOnRoomsPageModule)
    
      },
      {
        path:'status',
        loadChildren:()=>import('./monitoring/pages/status-monitoring/status-monitoring.module').then(m=>m.StatusMonitoringPageModule)
      }
    ]
  },

  {
    path:'',   
    redirectTo: '/rooms',
     pathMatch: 'full'
    

  },
  {
    path: 'status-monitoring',
    loadChildren: () => import('./monitoring/pages/status-monitoring/status-monitoring.module').then( m => m.StatusMonitoringPageModule)
  },
  {
    path: 'device-monitoring',
    loadChildren: () => import('./monitoring/pages/device-monitoring/device-monitoring.module').then( m => m.DeviceMonitoringPageModule)
  }
  
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
