import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRoomConfigurationPageRoutingModule } from './show-room-configuration-routing.module';

import { ShowRoomConfigurationPage } from './show-room-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRoomConfigurationPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ShowRoomConfigurationPage]
})
export class ShowRoomConfigurationPageModule {}
