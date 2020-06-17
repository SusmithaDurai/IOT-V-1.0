import { ComponentsModule } from '../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesettingPageRoutingModule } from './devicesetting-routing.module';

import { DevicesettingPage } from './devicesetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesettingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DevicesettingPage]
})
export class DevicesettingPageModule {}
