import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsPageRoutingModule } from './rooms-routing.module';

import { RoomsPage } from './rooms.page';
import { RoomComponentsModule } from './room-components/room-components.module';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsPageRoutingModule,
    RoomComponentsModule,
    ComponentsModule,
   // IonicStorageModule
  ],
  declarations: [RoomsPage]
})
export class RoomsPageModule {}
