import { ComponentsModule } from '../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceperformancePageRoutingModule } from './deviceperformance-routing.module';

import { DeviceperformancePage } from './deviceperformance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceperformancePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeviceperformancePage]
})
export class DeviceperformancePageModule {}
