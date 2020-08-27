import { IotApiService } from 'src/app/providers/iot-api.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { roomData } from '../../models/roomData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-room',
  templateUrl: './create-new-room.component.html',
  styleUrls: ['./create-new-room.component.scss'],
})
export class CreateNewRoomComponent implements OnInit {

@Input()
listOfRooms:roomData[];
 mapImageToType=new Map();


@Output() updateRooms=new EventEmitter();
  constructor(private iotService:IotApiService,private router:Router) { 

    
    this.mapImageToType.set('Living room','livingRoom');
    this.mapImageToType.set('Bed room','bedRoom');
    this.mapImageToType.set('Hall','hallRoom');
    this.mapImageToType.set('Custom','default');
  }

  ngOnInit() {
  
    //console.log("Create-new-Room component",this.listOfRooms);
  }

  manageRoomDetails(device_id){
    this.updateRooms.emit(device_id);
  }

  addClasses(roomType) {
   // console.log("Inside getClasses ",this.mapImageToType.get(roomType));
    return this.mapImageToType.get(roomType);
  }
  // getRoomImage(roomType):string{
  //   console.log("RoomType passed ",roomType);
  //   let image=this.mapImageToType.get(roomType);
  //   let value="/assets/icon/rooms/"+image;
  //   console.log("Image Link",value);
  //   return value;
  // }
      
}
