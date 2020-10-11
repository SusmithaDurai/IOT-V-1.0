import { deviceConfiguration } from './deviceConfiguration';
import { FormBuilder } from '@angular/forms';
import { switchInfo } from './switch-info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomData } from '../home/rooms/models/room-data';
import { DeviceData } from '../home/devices/models/device-data';

@Injectable({
  providedIn: 'root'
})
export class IotApiService {

  private _url:string="/assets/data/devices.json";
  private _deviceConfigurations:string="/assets/data/deviceConfigurations.json";

  private _listAllDevices:string="/assets/data/devices.json";

  private getListOfRooms="/assets/data/rooms.json"

  private saveRoomDetail="http://192.168.1.10/configure/device"

  devicesList : DeviceData[];
  listOfRoomsData : RoomData[];

  constructor(private http:HttpClient) { }

  getDeviceDetails() : Observable<any> {
    return this.http.get(this._url);
  }

  setListOfDevicesInRoom(listOfDevicesInRoom:DeviceData[]){
    this.devicesList=listOfDevicesInRoom;
  }

  listAllRooms():Observable<any>{
    return this.http.get(this.getListOfRooms);
  }

  listAllDevicesInRoom() :Observable<any>{
    return this.http.get(this._listAllDevices);
  }

  getListOfDevicesInRoom(){
    return this.devicesList;
  }

  setListOfRoomsData(data : RoomData[]) {
    this.listOfRoomsData=data;
  }

  getlistOfRoomsData(){
    return this.listOfRoomsData;
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
