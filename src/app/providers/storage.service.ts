import { RoomTypes } from './../home/rooms/models/room-types';
import { Observable, from } from 'rxjs';
import { Room } from './../home/rooms/models/room';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RoomData } from '../home/rooms/models/room-data';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:Storage) { }

  saveRoomsList(listOfRooms) {
    //this.storage.
      this.storage.set("roomList",JSON.stringify(listOfRooms));
  }


  getRooms() : Observable<any>{
    //return this.storage.get('roomList');
   return from(this.storage.get('roomList'));
  
  }
  getRoom():Observable<any>{
    return from(this.storage.get('RoomConfiguration'));
  }

  setRoomTypes(roomTypes:string[]) {
    this.storage.set("roomTypes",roomTypes);
  }

  setDeviceTypes(deviceTypes:string[]) {
    this.storage.set("deviceTypes",deviceTypes);


  }

  getDeviceTypes() {
    return this.storage.get("deviceTypes");
  }

  getRoomTypes():Promise<string[]>{
    return this.storage.get('roomTypes');
  }

  saveRoom(roomConfiguration:Room) {
    this.storage.set("RoomConfiguration",JSON.stringify(roomConfiguration));
  }

  saveDevicesList(listOfDevices) {
    this.storage.set("deviceList",JSON.stringify(listOfDevices));
  }

  getDevices():Promise<any> {
    return this.storage.get('deviceList');
  }
}
