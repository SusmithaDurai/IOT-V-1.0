import { ComponentsModule } from '../utils/utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchsetupPageRoutingModule } from './switchsetup-routing.module';

import { SwitchsetupPage } from './switchsetup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchsetupPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SwitchsetupPage]
})
export class SwitchsetupPageModule {}
