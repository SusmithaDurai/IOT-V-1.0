import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceMonitoringPageRoutingModule } from './device-monitoring-routing.module';

import { DeviceMonitoringPage } from './device-monitoring.page';
import { MonitoringComponentsModule } from '../../monitoring-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceMonitoringPageRoutingModule,
    ComponentsModule,
    MonitoringComponentsModule
  ],
  declarations: [DeviceMonitoringPage]
})
export class DeviceMonitoringPageModule {}
