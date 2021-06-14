import { SetDeviceStatus } from './../models/set-device-status';
import { RoomData } from './../../rooms/models/room-data';
import { RoomSetUp } from './../models/room-setup';
import { DeviceTypes } from './../models/device-types';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeviceData } from '../models/device-data';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevicesRestDatasourceService {
 //RESTURL:string="/assets/data/devices.json";
  RESTURL:string="http://3.137.85.184/get/device/config?device_id=";

 // DEVICETYPEURL:string="/assets/data/device-types.json";
 DEVICETYPEURL:string="http://3.137.85.184/list/device/types";
  RELAYSTATUSURL:string="/assets/data/device-status.json";

  SETRELAYSTATUSURL:string="http://3.137.85.184/insert/device/status";

  INSERTDEVICETYPEURL:string="http://3.137.85.184/update/device/types";
  UPDATEDEVICEURL:string="http://3.137.85.184/update/device/config";

  constructor(private httpClient:HttpClient) { }

  getDevices(device_id:string) : Observable<any>{
    console.log("Requested DeviceID ",this.RESTURL+device_id);
    let url=this.RESTURL+device_id;

    console.log("Device ID URL",url);
   // return this.sendRequest<any>('GET',this.RESTURL);
    
   
  return this.sendRequest<any>('GET',url);
  }

  getDeviceTypes() {
    return this.sendRequest<any>('GET',this.DEVICETYPEURL);
  }

  saveDevice(device:RoomData){
    return this.sendRequest<any>('POST',this.UPDATEDEVICEURL,device);
  }

  saveDeviceTypes(deviceTypes:DeviceTypes) {
    return this.sendRequest<any>('POST',this.INSERTDEVICETYPEURL,deviceTypes)
  }


  getRelayStatus(deviceId:string) {
    return this.sendRequest<any>('GET',this.RELAYSTATUSURL);
  }

  setRelayStatus(relay_status:SetDeviceStatus) {
    return this.sendRequest<any>('POST',this.SETRELAYSTATUSURL,relay_status);
  }


  private sendRequest<T>(verb:string,url:string,body?:any):Observable<T>{
    return this.httpClient.request<T>(verb,url,{
      body:body,
      headers:new HttpHeaders({
        //'Content-Type' : 'application/json'
        //'Authorization' :'Bearer ${Auth.gettoken()}',
      })
    }).pipe(catchError((error:Response)=>
    throwError(error)));
  }


  

}
