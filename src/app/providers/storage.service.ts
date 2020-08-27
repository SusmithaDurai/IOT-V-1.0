import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage:Storage) { }

  saveRoomsList(listOfRooms) {
    //this.storage.
      this.storage.set("roomList",JSON.stringify(listOfRooms));
  }


  getRoomsList() : Promise<any>{
    return this.storage.get('roomList');
  
  }

  saveDevicesList(listOfDevices) {
    this.storage.set("deviceList",JSON.stringify(listOfDevices));
  }

  getDevicesList():Promise<any> {
    return this.storage.get('deviceList');
  }
}
