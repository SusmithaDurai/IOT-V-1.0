import { SetDeviceStatus } from './../models/set-device-status';
import { RoomData } from './../../rooms/models/room-data';
import { DeviceTypes } from './../models/device-types';
import { Observable } from 'rxjs';
import { RoomSetUp } from './../models/room-setup';

import { DevicesRestDatasourceService } from './devices-rest-datasource.service';
import { Injectable } from '@angular/core';
import { DeviceData } from '../models/device-data';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevicesModalService {
   devices:DeviceData[]=new Array<DeviceData>();
   roomSetup:RoomSetUp;

  constructor(private deviceRestDatasource:DevicesRestDatasourceService) {
    console.log("Inside Constructor of Modal class to fetch Devices data");
   
    
   }

  getDevices(deviceId:string) : Observable<any>{
   return  this.deviceRestDatasource.getDevices(deviceId).pipe(
     tap(devices=>console.log("Response for Devices",devices))
   );
    // this.deviceRestDatasource.getDevices(deviceId).subscribe(data=>{
    //   this.roomSetup=data;
    //   console.log("Check Room setup info",this.roomSetup);
    //   const {device_config}=this.roomSetup;
    //   this.devices=device_config;

    // });
   // return this.devices;
  }

  saveDevice(device:RoomData):Observable<any>{
    return this.deviceRestDatasource.saveDevice(device);
  }

  saveDeviceTypes(deviceTypes:any):Observable<any>{
    return this.deviceRestDatasource.saveDeviceTypes(deviceTypes);

  }

  getDeviceTypes():Observable<any> {
    return this.deviceRestDatasource.getDeviceTypes();
  }

  getRelayStatus(deviceId :string):Observable<any>
{
  return this.deviceRestDatasource.getRelayStatus(deviceId);
}

setRelayStatus(relay_status:SetDeviceStatus):Observable<any>
{
  return this.deviceRestDatasource.setRelayStatus(relay_status); 
}


}


