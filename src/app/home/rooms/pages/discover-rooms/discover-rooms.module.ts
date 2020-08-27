import { StorageService } from 'src/app/providers/storage.service';
import { IonicStorageModule } from '@ionic/storage';
import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverRoomsPageRoutingModule } from './discover-rooms-routing.module';

import { DiscoverRoomsPage } from './discover-rooms.page';
import { RoomComponentsModule } from '../../room-components/room-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverRoomsPageRoutingModule,
    ComponentsModule,
    RoomComponentsModule,
    //IonicStorageModule
  ],
  providers:[StorageService],
  declarations: [DiscoverRoomsPage]
})
export class DiscoverRoomsPageModule {}
