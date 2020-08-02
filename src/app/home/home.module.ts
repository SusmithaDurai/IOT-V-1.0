import { DeviceSetUpPageModule } from '../device-setup/device-setup.module';
import { RouterModule } from '@angular/router';
import { DashboardPageModule } from './../dashboard/dashboard.module';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule   } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  exports:[HomePageRoutingModule],
  declarations: [HomePage]
})
export class HomePageModule {}
