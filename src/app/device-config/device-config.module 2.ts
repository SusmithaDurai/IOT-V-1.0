import { ComponentsModule } from '../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceConfigPageRoutingModule } from './device-config-routing.module';

import { DeviceConfigPage } from './device-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceConfigPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DeviceConfigPage]
})
export class DeviceConfigPageModule {}
