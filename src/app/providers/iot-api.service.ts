import { deviceConfiguration } from './deviceConfiguration';
import { FormBuilder } from '@angular/forms';
import { switchInfo } from './switch-info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotApiService {

  private _url:string="/assets/data/devices.json";
  private _deviceConfigurations:string="/assets/data/deviceConfigurations.json";

  private _listAllDevices:string="/assets/data/devices.json";

  deviceConfiguration : deviceConfiguration[];
  constructor(private http:HttpClient) { }

  getDeviceDetails() : Observable<any> {
    return this.http.get(this._url);
  }

  setDeviceConfiguration(deviceconfig:deviceConfiguration[]){
    this.deviceConfiguration=deviceconfig;
  }

  listAllDevices():Observable<any>{
    return this.http.get(this._listAllDevices);
  }

  getDeviceConfiguration(){
    return this.deviceConfiguration;
  }

  saveSwitchDetails(switchDetails:FormBuilder) : Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',switchDetails);
  }



  // FIXME:: Use proper naming conventionss
  deviceConfigurations():Observable<any>{
    console.log("Iot Service : Device Configurations");
    return this.http.get(this._deviceConfigurations);
  }


}
