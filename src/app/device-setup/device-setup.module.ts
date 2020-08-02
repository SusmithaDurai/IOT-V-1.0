import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { DeviceSetUpPage } from './device-setup.page';
import { AddDeviceBtnComponent } from '../components/add-device-btn/add-device-btn.component';


const routes: Routes = [
  {
    path: '',
    component: DeviceSetUpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
              
  ],
  declarations: [DeviceSetUpPage]
})
export class DeviceSetUpPageModule {}
