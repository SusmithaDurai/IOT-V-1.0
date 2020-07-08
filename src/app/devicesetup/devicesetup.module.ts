import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { DevicesetupPage } from './devicesetup.page';
import { AdddevicebtnComponent } from '../components/adddevicebtn/adddevicebtn.component';


const routes: Routes = [
  {
    path: '',
    component: DevicesetupPage
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
  declarations: [DevicesetupPage]
})
export class DevicesetupPageModule {}
