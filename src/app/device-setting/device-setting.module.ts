import { DeviceConfigPage } from './../device-config/device-config.page';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DeviceSettingPage } from './device-setting.page';
import { ComponentsModule } from '../components/components.module';
import { SwitchsetupPage } from '../switch-setup/switch-setup.page';


const routes: Routes = [
  {
    //path: '',
    //component: DeviceConfigPage,
    //children: [         
      //{
        path: 'switchsetup',
        component: SwitchsetupPage
        //loadChildren: () => import('../device-setting/device-setting.module').then(m => m.DeviceSettingPageModule),
      },
      {
        path: '',
        component: DeviceConfigPage
      }
      // {
      //   path: '',
      //   redirectTo: '/home/device-setting/device-config',
      //   //pathMatch: 'full'
      // }

   // ]


  //}


];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceSettingPage, DeviceConfigPage, SwitchsetupPage],
  exports : [DeviceSettingPage, DeviceConfigPage, SwitchsetupPage]

})
export class DeviceSettingPageModule { }
