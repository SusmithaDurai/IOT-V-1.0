import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusMonitoringPageRoutingModule } from './status-monitoring-routing.module';

import { StatusMonitoringPage } from './status-monitoring.page';
import { RoomComponentsModule } from 'src/app/home/rooms/room-components/room-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusMonitoringPageRoutingModule,
    ComponentsModule,
    RoomComponentsModule
  ],
  declarations: [StatusMonitoringPage]
})
export class StatusMonitoringPageModule {}
