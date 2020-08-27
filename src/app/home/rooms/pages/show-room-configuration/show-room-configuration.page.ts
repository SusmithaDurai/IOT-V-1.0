import { IotApiService } from 'src/app/providers/iot-api.service';
import { StorageService } from './../../../../providers/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { roomData } from '../../models/roomData';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-show-room-configuration',
  templateUrl: './show-room-configuration.page.html',
  styleUrls: ['./show-room-configuration.page.scss'],
})
export class ShowRoomConfigurationPage implements OnInit {
  private rooms :Array<String>;
  private customRoomName : String;
  private currentRoom:string;
  private currentRoomType:string;

  updateRoomDetailForm:FormGroup;
  currentRoomParams : any;

  roomList:roomData[];
  mapImageToType=new Map();
  
  constructor(private alertController:AlertController,private formBuilder : FormBuilder,private route:ActivatedRoute,private storage:StorageService,private iotService:IotApiService) { 
    this.currentRoomParams = this.route.queryParams.subscribe(params => {
      // (+) converts string 'id' to a number
     console.log("Parameters", params.device_id,params.roomType,params.roomName);
   
     this.currentRoomParams=params;
  });
  }

  OnDestroy() {
    this.currentRoomParams.unsubscribe();
  }

  ngOnInit() {

    this.mapImageToType.set('Living room','livingRoom');
    this.mapImageToType.set('Bed room','bedRoom');
    this.mapImageToType.set('Hall','hallRoom');
    //mapImageToType.set('Bath room','bath_room');
    //mapImageToType.set('Portico','portico');
    this.mapImageToType.set('Custom','default');

    
      this.rooms=['Custom','Living room', 'Bed room', 'Hall'];
      this.updateRoomDetailForm =this.formBuilder.group({
        roomType:['',Validators.required],
        roomName : ['',Validators.required]
      });


      this.updateRoomDetailForm.patchValue({
        roomType:this.currentRoomParams.roomType,
        roomName:this.currentRoomParams.roomName
      });
      this.currentRoomType=this.currentRoomParams.roomType;
      //this.getRoomImage();
      this.addClasses();
   
  }

  // getRoomImage():string{

  //   console.log("RoomType passed ",this.currentRoomType);
  //   let image=this.mapImageToType.get(this.currentRoomType);
  //   let value="/assets/icon/rooms/"+image;
  //   console.log("Image Link",value);
  //   return value;
  // }

  addClasses() {
    console.log("Inside getClasses ",this.mapImageToType.get(this.currentRoomType));
    return this.mapImageToType.get(this.currentRoomType);
  }

  selectedValue(event){
    console.log(event.target.value);
    this.currentRoomType=event.target.value;

    if(event.target.value === 'Custom' ) {
     // console.log("Selected Value is custom");
      this.customInputValue();
      this.currentRoomType='Custom';
    }
    this.addClasses();

  }

  async customInputValue() {
    const inputAlert = await this.alertController.create({
      header: 'Enter your custom type:',
      inputs: [ { type: 'text', placeholder: 'type in' } ],
      buttons: [ { text: 'Cancel' }, { text: 'Ok' } ]
    });
 
    await inputAlert.present();
      let result=await inputAlert.onDidDismiss().then((result=>{
        //console.log(result);
        const {data} =result;
       // const [values]=data;
       // console.log(data.values[0]);
        this.customRoomName=data.values[0]
        let indexNumber=this.checkForValue(data.values[0]);
        console.log(indexNumber);
        if(indexNumber===-1){
           this.rooms.push(data.values[0])
          this.currentRoom=data.values[0];
          this.currentRoomType='Custom';
        }else{
          this.currentRoom=data.values[0];
         // this.currentRoomType='Custom';
        }
      }));
     

      
  };

  checkForValue(customRoomName){
    console.log(customRoomName)
    let returnValue=-1;
      this.rooms.forEach(function(value)  {
        //console.log("For Each Value",value)
        if(customRoomName === value){
           returnValue=0;
        }else{
          //console.log("Not Same")
        }
      });
      return returnValue;
    }


    async updateRoomDetails() {

      if(!this.updateRoomDetailForm.valid){
        console.log("Please provide required details");
        return false;
      }else{
        console.log(this.updateRoomDetailForm.value);
        // const dataFromIotSerice=this.iotService.getlistOfRoomsData();
        // console.log("Data from IOTSERVICE CALL");
         await this.storage.getRoomsList().then((val)=>{
         console.log(val); 
         this.roomList=JSON.parse(val);
       });
       console.log("Data from STORAGE",this.roomList);

       const id=this.roomList.findIndex(index=>index.device_id===this.currentRoomParams.device_id);
       console.log(id);
       let getroomDetail=this.roomList[id];
       console.log(getroomDetail);
       const {roomType,roomName}=this.updateRoomDetailForm.value;
       getroomDetail.room_name=roomName;
       getroomDetail.room_type=roomType;
       console.log("Updated Room Detail ",getroomDetail);
       /*FIX ME : Save to Post Call*/
       
      }
    }

}
