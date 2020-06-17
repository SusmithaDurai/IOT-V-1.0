import { ComponentsModule } from '../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesetupPageRoutingModule } from './devicesetup-routing.module';

import { DevicesetupPage } from './devicesetup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesetupPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DevicesetupPage]
})
export class DevicesetupPageModule {}
