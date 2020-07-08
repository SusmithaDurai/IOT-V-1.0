import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DevicesettingPage } from './devicesetting.page';
import { ComponentsModule } from '../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: DevicesettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevicesettingPage]
})
export class DevicesettingPageModule {}
