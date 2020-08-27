import { roomData } from './../../models/roomData';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { IotApiService } from 'src/app/providers/iot-api.service';
import { Router } from '@angular/router';
import { deviceData } from '../../models/deviceData';
import { StorageService } from 'src/app/providers/storage.service';

@Component({
  selector: 'app-discover-devices-on-rooms',
  templateUrl: './discover-devices-on-rooms.page.html',
  styleUrls: ['./discover-devices-on-rooms.page.scss'],
})
export class DiscoverDevicesOnRoomsPage implements OnInit {
 
  listOfRooms: roomData[];
  listOfDevices : deviceData[];
  showDevices: boolean;

  //ngModel variable for Selected device from dropdown
 deviceId : string;
 
 selectedRoomSegment=new EventEmitter();

  constructor(private iotService:IotApiService,private router:Router,private storage:StorageService) { 
    
  }

   ngOnInit() {

    console.log("Calling REST API......");

    // FIXME:: any observable should be destroyed properly.
    this.iotService.listAllRooms().subscribe(data=>{
      const {devices}=data;
    this.listOfRooms=devices;
    console.log("List of Rooms ",this.listOfRooms);
    this.iotService.setListOfRoomsData(this.listOfRooms);
      //this.storage.saveRoomsList(this.listOfRooms);
   this.deviceId=this.listOfRooms[0].device_id;
    });

    
  }

  ionViewWillEnter(){
    //console.log("******Inon View Enter*******",this.listOfRooms[0].device_id)
    this.deviceId=this.listOfRooms[0].device_id;

    // FIXME:: Verify the code once
   // this.selectedRoomSegment.emit(this.deviceId);

    this.getDevicesForSelectedRoom(this.deviceId);
    }


    showDeviceConfiguration(device){
        console.log(device);
        this.router.navigate(['/home/devices/show-device-configuration'],{queryParams:{device_name:device}});
    }

  selectedRoom(items){
    this.deviceId=items.detail.value;
   // console.log("Selected from ion-Change Event ",items.detail.value);
    this.getDevicesForSelectedRoom(this.deviceId);
  }
  getDevicesForSelectedRoom(deviceID:string){
    console.log("Selected Device Detail ",deviceID);
    this.showDevices=true;

    this.iotService.listAllDevicesInRoom().subscribe(data=>{
      const {device_config} = data;
      this.listOfDevices=device_config;
      this.iotService.setListOfDevicesInRoom(this.listOfDevices);
      this.storage.saveDevicesList(this.listOfDevices);
     console.log("Device Configurations ",this.listOfDevices[0].name);

    });




  }

}
