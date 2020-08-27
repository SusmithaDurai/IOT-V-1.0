import { ComponentsModule } from './../../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDeviceConfigurationPageRoutingModule } from './show-device-configuration-routing.module';

import { ShowDeviceConfigurationPage } from './show-device-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDeviceConfigurationPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [ShowDeviceConfigurationPage]
})
export class ShowDeviceConfigurationPageModule {}
