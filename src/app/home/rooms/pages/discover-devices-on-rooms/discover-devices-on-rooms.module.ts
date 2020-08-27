import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverDevicesOnRoomsPageRoutingModule } from './discover-devices-on-rooms-routing.module';

import { DiscoverDevicesOnRoomsPage } from './discover-devices-on-rooms.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RoomComponentsModule } from '../../room-components/room-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverDevicesOnRoomsPageRoutingModule,
    ComponentsModule,
    RoomComponentsModule

  ],
  declarations: [DiscoverDevicesOnRoomsPage]
})
export class DiscoverDevicesOnRoomsPageModule {}
