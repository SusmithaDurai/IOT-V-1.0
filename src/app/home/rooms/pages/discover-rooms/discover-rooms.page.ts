import { Component, OnInit, Input } from '@angular/core';
import { IotApiService } from 'src/app/providers/iot-api.service';
import { Router } from '@angular/router';
import { roomData } from '../../models/roomData';
import { Storage } from '@ionic/storage';
import { StorageService } from 'src/app/providers/storage.service';

@Component({
  selector: 'app-discover-rooms',
  templateUrl: './discover-rooms.page.html',
  styleUrls: ['./discover-rooms.page.scss'],
})
export class DiscoverRoomsPage implements OnInit {

  listOfRooms :roomData[];
  

  constructor(private iotService:IotApiService,private router:Router,private storage:StorageService) { }

  ngOnInit() {

  //  console.log("*******Entering into Init Page of Rooms********")
    this.iotService.listAllRooms().subscribe(data=>{
      const {devices}=data;
    this.listOfRooms=devices;
   // console.log("List of Rooms ",this.listOfRooms);
   // this.iotService.setListOfRoomsData(this.listOfRooms);
    this.storage.saveRoomsList(this.listOfRooms);
  
    });
  }

  // manageRoomDetails(){
  //   console.log("Navigate to Show Room Configuration");
  //   this.router.navigateByUrl('/show-room-configuration');
  // }

  navigatePage(room){
    console.log("Naviaget Room ",room);
   // console.log("Room Object contains Device ID ",room.device_id)
    //this.router.navigateByUrl('home/rooms/show-room-configuration');
    this.router.navigate(['/home/rooms/show-room-configuration'],{queryParams:{device_id:room.device_id,roomType:room.room_type,roomName:room.room_name}});


  }







}
