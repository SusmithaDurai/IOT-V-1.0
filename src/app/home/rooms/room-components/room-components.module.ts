import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewRoomComponent } from './create-new-room/create-new-room.component';
import { ManageRoomConfigurationComponent } from './manage-room-configuration/manage-room-configuration.component';
import { CreateNewDeviceComponent } from './create-new-device/create-new-device.component';



@NgModule({
  declarations: [CreateNewRoomComponent,ManageRoomConfigurationComponent,CreateNewDeviceComponent],
  exports :[CreateNewRoomComponent,ManageRoomConfigurationComponent,CreateNewDeviceComponent],
  imports: [
    CommonModule
  ]
})
export class RoomComponentsModule { }
