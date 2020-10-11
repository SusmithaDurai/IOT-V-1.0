import { RoomTypes } from './../../models/room-types';
import { throwError, Subject } from 'rxjs';
import { RoomsModalService } from './../../services/rooms-modal.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IotApiService } from 'src/app/providers/iot-api.service';
import { Router } from '@angular/router';
import { RoomData } from '../../models/room-data';
import { Storage } from '@ionic/storage';
import { StorageService } from 'src/app/providers/storage.service';
import { DeviceData } from 'src/app/home/devices/models/device-data';
import { IotErrorHandlerService } from 'src/app/providers/messages/iot-error-handler.service';
import { error } from 'protractor';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-discover-rooms',
  templateUrl: './discover-rooms.page.html',
  styleUrls: ['./discover-rooms.page.scss'],
})
export class DiscoverRoomsPage implements OnInit,OnDestroy {

  private roomsUnsubscribe = new Subject<void>();
  listOfRooms: RoomData[];
  roomTypes: string[];
  room_types:RoomTypes;

  constructor( private router: Router,
    private storage: StorageService, private roomsModalService: RoomsModalService,
     private errorService: IotErrorHandlerService) { }
  
  
    ngOnDestroy(): void {
      this.roomsUnsubscribe.next();
      this.roomsUnsubscribe.complete();
  }

  ngOnInit() {

    //  console.log("*******Entering into Init Page of Rooms********")
    this.roomsModalService.getRooms().pipe(takeUntil(this.roomsUnsubscribe)).subscribe(
      (response) => {
        const { new_devices } = response;
        this.listOfRooms = new_devices;
        console.log("List of Rooms ",this.listOfRooms);
        this.storage.saveRoomsList(this.listOfRooms);
      },
      (error) => {
        console.log("ERROR Occured ", error);
      }
    );

    this.roomsModalService.getRoomTypes().pipe(takeUntil(this.roomsUnsubscribe)).subscribe(
      
      (response) => {
      console.log("List of Room Types from Server", response);
       const { room_types } = response;
      this.roomTypes = room_types;
      console.log("List of Room Types from Server", this.roomTypes);

      if(this.roomTypes.length==0){
        console.log("Empty Room Types");
        this.roomTypes=["Others"];
        this.storage.setRoomTypes(this.roomTypes);
      }else{
      this.storage.setRoomTypes(this.roomTypes);
      }
    },
    (error)=>{
      console.log("ERROR Occured ",error);
    });
  }


  navigatePage(room) {
    console.log("Naviaget Room ", room);
    this.router.navigate(['/home/devices'],{queryParams:{id:room.device_id}});


  }

  showDeviceStatus(room){
    console.log("Device Details for Status ",room);
    this.router.navigate(['/home/rooms/device-monitoring'],{queryParams:{roomName:room.room_name,device_id:room.device_id}});
  }







}
