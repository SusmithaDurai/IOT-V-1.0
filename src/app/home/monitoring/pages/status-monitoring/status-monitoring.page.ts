import { DevicesModalService } from './../../../devices/services/devices-modal.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/providers/storage.service';
import { IotErrorHandlerService } from 'src/app/providers/messages/iot-error-handler.service';
import { RoomsModalService } from 'src/app/home/rooms/services/rooms-modal.service';
import { RoomData } from 'src/app/home/rooms/models/room-data';
import { DeviceData } from 'src/app/home/devices/models/device-data';
import { DeviceStatus } from 'src/app/home/devices/models/device-status';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-status-monitoring',
  templateUrl: './status-monitoring.page.html',
  styleUrls: ['./status-monitoring.page.scss'],
})
export class StatusMonitoringPage implements OnInit ,OnDestroy{
  private statusMonitoringUnsubscribe=new Subject<void>();
roomNames:string[];
listOfRooms: RoomData[];
deviceId:string;
listOfDevices : DeviceData[];
deviceStatus:DeviceStatus;
showDevices: boolean;
room:RoomData;

  constructor(private router: Router,
    private storage: StorageService, private roomsModalService: RoomsModalService,
     private errorService: IotErrorHandlerService,private deviceModalService:DevicesModalService) {
       
      }
  ngOnDestroy(): void {
    this.statusMonitoringUnsubscribe.next();
    this.statusMonitoringUnsubscribe.complete();
  }

  // ionViewWillEnter(){
  //   this.deviceId=this.listOfRooms[0].device_id;

  //   this.getDevicesForSelectedRoom(this.deviceId);

  //   this.deviceModalService.getRelayStatus(this.deviceId).subscribe(
  //     (response)=>{
      
  //       this.deviceStatus=response;
  //       console.log("Device Status ",this.deviceStatus);
  //   },
  //   (error)=>{
  //     console.log("ERROR Occured ",error);
  //   });
  // }

  // getDevicesForSelectedRoom(deviceID:string){
  //   console.log("Selected Device Detail ",deviceID);
  //   this.showDevices=true;

  //   this.deviceModalService.getDevices(deviceID).subscribe(
      
  //     (response)=>
  //     {
  //       console.log("Result for Devices ",response);
  //       const {device_config}=response;
  //       this.room=response;
  //       console.log("Room Detail",this.room);
  //       this.listOfDevices=device_config;
  //       console.log("List Of Devices length",this.listOfDevices.length);
  //       // if(this.listOfDevices.length<1) {
  //       //   console.log("Empty List Of Devices");
  //       //   this.listOfDevices=this.setDefaultDeviceConfigurations(this.room,this.listOfDevices);
  //       // }
  //      // this.roomName=this.room.room_name;
  //       console.log(this.listOfDevices);
  //     },
  //     (error)=>{
  //       console.log("ERROR Occured ",error);
  //     });
    
  // }

  ngOnInit() {
    this.roomsModalService.getRooms().pipe(takeUntil(this.statusMonitoringUnsubscribe)).subscribe(
      (response)=>{
      console.log("Inside OnInint Discover RoomsDevices",response);
      const {new_devices}=  response;
     this.listOfRooms=new_devices;
     console.log("List of Rooms ",this.listOfRooms);
      if(this.listOfRooms.length>0 || this.listOfRooms!=null)
       this.deviceId=this.listOfRooms[0].device_id;
    },
    (error)=>{
      console.log("ERROR Occured",error);
    });



    // this.roomsModalService.getRoomLists().subscribe(
    //   (response)=>{
    //     const {room_names}=response;
    //     this.roomNames=room_names;
    // });
  }

  // selectedRoom(items){
  //   this.deviceId=items.detail.value;
  //   //this.roomName=items
  //  // console.log("Selected from ion-Change Event ",items.detail.value);
  //   this.getDevicesForSelectedRoom(this.deviceId);
  // }

  addClass(){
    return "livingRoom";
  }

  // viewRoom(room:string) {
  //   this.router.navigate(['/home/status/device-monitoring/'],{queryParams:{roomName:room}})
  // }

  

}
