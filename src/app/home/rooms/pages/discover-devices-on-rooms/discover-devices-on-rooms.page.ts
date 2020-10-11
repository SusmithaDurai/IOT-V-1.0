import { AlertController } from '@ionic/angular';
import { RoomsModalService } from './../../services/rooms-modal.service';
import { DevicesModalService } from './../../../devices/services/devices-modal.service';
import { RoomData } from '../../models/room-data';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { IotApiService } from 'src/app/providers/iot-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DeviceData } from '../../../devices/models/device-data';
import { StorageService } from 'src/app/providers/storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeviceStatus } from 'src/app/home/devices/models/device-status';


@Component({
  selector: 'app-discover-devices-on-rooms',
  templateUrl: './discover-devices-on-rooms.page.html',
  styleUrls: ['./discover-devices-on-rooms.page.scss'],
})
export class DiscoverDevicesOnRoomsPage implements OnInit,OnDestroy {
 
  private deviceUnsubscribe=new Subject<void>();        
  listOfRooms: RoomData[]=[];
  listOfDevices : DeviceData[];
  deviceStatus:DeviceStatus;
  showDevices: boolean;
  room:RoomData;
  deviceTypes:string[];
  //relay:DeviceData;

  //ngModel variable for Selected device from dropdown
 deviceId : string='';
 roomName:string='';
 previousRoom:string;
 currentRoom:string;
 
 selectedRoomSegment=new EventEmitter();

  constructor(private router:Router,private storage:StorageService,
    private deviceModalService:DevicesModalService,private roomsModalService:RoomsModalService,
    private alertController:AlertController,private activatedRoute:ActivatedRoute) { 
          this.activatedRoute.queryParams.subscribe((params=>{
            console.log("Parameters of Discover Devices ",params);
            this.deviceId=params.id;

            console.log("Device ID after Contructor",this.deviceId);
          }));

          
  }
  ngOnDestroy(): void {
    this.deviceUnsubscribe.next();
    this.deviceUnsubscribe.complete();
  }

   ngOnInit() {

    console.log("Calling REST API......");

    // FIXME:: any observable should be destroyed properly.
    this.roomsModalService.getRooms().pipe(takeUntil(this.deviceUnsubscribe)).subscribe(
      (response)=>{
      console.log("Inside OnInint Discover RoomsDevices",response);
      const {new_devices}=  response;
     this.listOfRooms=new_devices;
     console.log("List of Rooms ",this.listOfRooms);
     if(this.deviceId===undefined) {
      this.deviceId=this.listOfRooms[0].device_id;
     }
     // if(this.listOfRooms.length>0 || this.listOfRooms!=null)
       //this.deviceId=this.listOfRooms[0].device_id;
    },
    (error)=>{
      console.log("ERROR Occured",error);
    });

    this.deviceModalService.getDeviceTypes().pipe(takeUntil(this.deviceUnsubscribe)).subscribe(
      (response)=>{
        console.log("Device Types ",response);
      const{device_types}=response;
      
      this.deviceTypes=device_types;
      this.storage.setDeviceTypes(this.deviceTypes);
    },
    (error)=>{
      console.log("ERROR Orccured",error);
    });

   
    
  }

  ionViewWillEnter(){
   console.log("******Inon View Enter*******",this.deviceId)
    if(this.listOfRooms.length>0) {
      if(this.deviceId!=null){
        console.log("Current Device Id ",this.deviceId);
        this.getDevicesForSelectedRoom(this.deviceId);
         
      }else{
        console.log("View Enter Else Part")
      
    this.deviceId=this.listOfRooms[0].device_id;
    this.roomName=this.listOfRooms[0].room_name;
    this.getDevicesForSelectedRoom(this.deviceId);
      }
      //console.log("")
    

    this.deviceModalService.getRelayStatus(this.deviceId).pipe(takeUntil(this.deviceUnsubscribe)).subscribe(
      (response)=>{
      
        this.deviceStatus=response;
        console.log("Device Status ",this.deviceStatus);
    },
    (error)=>{
      console.log("ERROR Occured ",error);
    });
    }
  }

    showDeviceConfiguration(device){
        console.log(device);
        this.router.navigate(['/home/devices/show-device-configuration'],{queryParams:{device_name:device,device_id:this.deviceId}});
    }

  selectedRoom(items){
    this.deviceId=items.detail.value;
    //this.roomName=items
   // console.log("Selected from ion-Change Event ",items.detail.value);
    this.getDevicesForSelectedRoom(this.deviceId);
  }
  getDevicesForSelectedRoom(deviceID:string){
    console.log("Selected Device Detail ",deviceID);
    this.showDevices=true;

    this.deviceModalService.getDevices(deviceID).pipe(takeUntil(this.deviceUnsubscribe)).subscribe(
      
      (response)=>
      {
        console.log("Result for Devices ",response);
        const {device_config}=response;
        this.room=response;
        console.log("Room Detail",this.room);
        this.listOfDevices=device_config;
        console.log("List Of Devices length",this.listOfDevices.length);
        if(this.listOfDevices.length<1) {
          console.log("Empty List Of Devices");
          this.listOfDevices=this.setDefaultDeviceConfigurations(this.room,this.listOfDevices);
        }
        this.roomName=this.room.room_name;
        this.storage.saveRoom(this.room);
        this.storage.saveDevicesList(this.listOfDevices);
        console.log(this.listOfDevices);
      },
      (error)=>{
        console.log("ERROR Occured ",error);
      });
    
  }

  setDefaultDeviceConfigurations(room:RoomData,listOfDevices:DeviceData[]) {
    const numOfRelays=room.num_relays;
    
   for(let i=1;i<=numOfRelays;i++){
          console.log("Relay Number",i);
          const relay:DeviceData={
          name:"Unknown",
          type:"Others",
          schedule:[],
          }
          
          listOfDevices.push(relay); 

    }
    console.log("New List Of Devices",listOfDevices);
    return listOfDevices;

  }

  previousRoomName() {
    console.log("previousValue "+this.roomName);
    this.previousRoom=this.roomName;
  }

  currentRoomName() {
    console.log("Cuurent RoomName"+this.roomName);
    this.currentRoom=this.roomName;
    if(this.roomName!=this.previousRoom){
      this.room.room_name=this.roomName;
      console.log("Room Details for RoomName updated",this.room);
      
      this.deviceModalService.saveDevice(this.room).pipe(takeUntil(this.deviceUnsubscribe)).subscribe(
        (response)=>{
          console.log(" Room Index ",this.roomName,this.deviceId);
          const index= this.listOfRooms.findIndex(item => item.device_id === this.deviceId);
         
          console.log("Updated Room Index ",index,this.roomName,this.deviceId);
          this.listOfRooms[index].room_name=this.roomName;
          
        },
        (error)=>{
          console.log("Error",error);
        }
      )

    }
  }

  

}
