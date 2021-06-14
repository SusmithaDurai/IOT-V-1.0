import { RoomTypes } from './../models/room-types';
import { StorageService } from 'src/app/providers/storage.service';
import { Observable } from 'rxjs';
import { RoomData } from '../models/room-data';
import { RoomsRestDatasourceService } from './rooms-rest-datasource.service';
import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { tap, catchError } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class RoomsModalService {

  private rooms:RoomData[]=new Array<RoomData>();
  room:RoomData;
  private locator = (r: RoomData, id: string) => r.device_id == id;


  constructor(private roomDataSource:RoomsRestDatasourceService,private storageService:StorageService) {
    console.log("Inside Constructor of Modal class to fetch Rooms data");
  
    // this.roomDataSource.getRooms().subscribe( data=>{
    //   console.log("Get Rooms Resulkt ",data);
    //    const {devices}=  data;
    //     this.rooms=devices;
    // });

   }

    getRooms():Observable<any> {
     return  this.roomDataSource.getRooms().pipe(
       
       tap(roomList=>{
        const {devices}=  roomList;
        this.rooms=devices;
         console.log("Rooms Data ",this.rooms);
       })
     );
   }


   getRoomTypes():Observable<any> {
    return this.roomDataSource.getRoomTypes();
   }

   getRoomLists():Observable<any>{
     return this.roomDataSource.getRoomNameLists();
   }


   saveRoomTypes(roomTypes:any) :Observable<RoomTypes>{
     return this.roomDataSource.saveRoomTypes(roomTypes);
   }


    getRoom(deviceId : string,saveRoom:any) :Promise<RoomData>{
   let updatedRoom:any;
    // this.storageService.getRooms().then((rooms)=>{
    //     this.rooms=JSON.parse(rooms);
    //     console.log("Rooms from storage",this.rooms);
   
     
    //  const room= this.rooms.findIndex(item => this.locator(item, deviceId));
    //  this.rooms[room].room_name=saveRoom.roomName;
    //  this.rooms[room].room_type=saveRoom.roomType;
    //  console.log("After Update ",this.rooms[room]);
    //  updatedRoom=this.rooms[room];
    // });



     //const indexNumber =this.rooms.findIndex(item => this.locator(item, deviceId))
    // console.log("After Update Room in Modal",indexNumber);
     //this.rooms[indexNumber]=room;
    
    //  this.roomDataSource.saveRoom(this.rooms[room]).subscribe(data=>{

    //   console.log("REsponse from server after Room POST call",data);
    //   return "SUCCESS";
    //  });
    // console.log("Final Array after Update : ",this.rooms);
    
    
    return updatedRoom;
   }
}
