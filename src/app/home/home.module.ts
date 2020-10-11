import { DevicesModalService } from './devices/services/devices-modal.service';
import { DevicesRestDatasourceService } from './devices/services/devices-rest-datasource.service';
import { RoomsRestDatasourceService, REST_URL } from './rooms/services/rooms-rest-datasource.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardPageModule } from './../dashboard/dashboard.module';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule   } from './home-routing.module';

import { HomePage } from './home.page';
import { RoomsModalService } from './rooms/services/rooms-modal.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule],
    providers:[
      RoomsRestDatasourceService,
      DevicesRestDatasourceService,
      DevicesModalService,
      {provide:REST_URL,useValue:'http://localhost:8100'},
      RoomsModalService,
      {provide:REST_URL,useValue:'http://localhost:8100'}
    ],
  
  exports:[HomePageRoutingModule],
  declarations: [HomePage]
})
export class HomePageModule {}
