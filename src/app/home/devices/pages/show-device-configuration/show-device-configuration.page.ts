import { RoomData } from './../../../rooms/models/room-data';
import { DevicesModalService } from './../../services/devices-modal.service';
import { StorageService } from 'src/app/providers/storage.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { IotApiService } from 'src/app/providers/iot-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';
import { analyzeAndValidateNgModules, ThrowStmt } from '@angular/compiler';
import { DeviceData } from '../../models/device-data';
import { Room } from 'src/app/home/rooms/models/room';
import { RoomSetUp } from '../../models/room-setup';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-show-device-configuration',
  templateUrl: './show-device-configuration.page.html',
  styleUrls: ['./show-device-configuration.page.scss'],
})
export class ShowDeviceConfigurationPage implements OnInit,OnDestroy {
  private deviceConfigUnsubscribe=new Subject<void>();
  currentdeviceName: any;
  //devices: string[];
  currentDeviceDetails : any;
   updatedDevice:DeviceData;
  private customdeviceName : String;
  private currentDevice:string;
  private currentDeviceId:string;
  private currentRoom:RoomData;
  room:RoomSetUp;
  devicesArr:any;
  deviceTypes:string[];
  deviceTypesCount:number;
  currentDeviceType:string;
  mapImageToType = new Map();
  

  updateDeviceDetailForm:FormGroup;

  constructor(private activatedRoute:ActivatedRoute,
    private alertController:AlertController,private formBuilder : FormBuilder,
    private storage:StorageService,private popOverController:PopoverController,private route:Router,private deviceModalService:DevicesModalService) { 
    this.currentdeviceName = this.activatedRoute.queryParams.pipe(takeUntil(this.deviceConfigUnsubscribe)).subscribe(params => {
      // (+) converts string 'id' to a number
     console.log("Device Parameters", params.device_name);
     this.currentDevice= params.device_name;
     this.currentDeviceId=params.device_id;
    
  });
  }
  ngOnDestroy(): void {
    this.deviceConfigUnsubscribe.next();
    this.deviceConfigUnsubscribe.complete();
  }

 ngOnInit() {
  this.mapImageToType.set('A/C', 'airConditionerGrey');
  this.mapImageToType.set('Bulb', 'lightBulbGrey');
  this.mapImageToType.set('Fan', 'fanGrey');
  this.mapImageToType.set('Heater', 'heaterGrey');
  //this.mapImageToType.set('Fire alarm', 'default');
  this.mapImageToType.set('Others', 'default');

    
  this.storage.getDeviceTypes().then((types=>{
    this.deviceTypes=types;
    this.deviceTypesCount=this.deviceTypes.length;
  }));
      this.updateDeviceDetailForm =this.formBuilder.group({
        deviceType:['',Validators.required],
        deviceName : ['',Validators.required],
        scheduled : [''],
        startTime:[''],
        endTime:['']
      });

      this.storage.getRoom().pipe(takeUntil(this.deviceConfigUnsubscribe)).subscribe((response=>{
        console.log("Current Selected Room from Storage ",JSON.parse(response));
        this.currentRoom=JSON.parse(response);
        const {device_config}=JSON.parse(response);
        this.currentDeviceDetails=device_config;
        const id=this.currentDeviceDetails.findIndex(index=>index.name===this.currentDevice);
       console.log("Device Array is ",id);
      let getDeviceDetail=this.currentDeviceDetails[id];
      console.log("Selected Device Details ",getDeviceDetail);

      let sTime='';
      let eTime='';
      let scheduleValue = false;
      console.log("Empty check ",getDeviceDetail.schedule);
        if(getDeviceDetail.schedule.length!=0) {
          console.log("Inside non empty array");
         sTime=this.pad(getDeviceDetail.schedule[0])+":"+this.pad(getDeviceDetail.schedule[1]);//"timing" : [1,5,10,30]},
        eTime=this.pad(getDeviceDetail.schedule[2])+":"+this.pad(getDeviceDetail.schedule[3]);//"timing" : [1,5,10,30]},
        console.log("End Time ",eTime);
        scheduleValue=true;
      }

      this.updateDeviceDetailForm.patchValue({
        deviceType:getDeviceDetail.type,
        deviceName:getDeviceDetail.name,
        scheduled:scheduleValue,
        startTime:sTime,
        endTime:eTime

      });
      console.log(getDeviceDetail.name);
      console.log(getDeviceDetail.type);
      console.log(getDeviceDetail.schedule);

      }));

      

      this.addClasses();

}

pad(num): string {
console.log("Value of Num ",num);
    // FIXME :: num is already string only
    while (num.toString().length < 2){
      num = "0" + num;
    }

    return num;
}




selectedValue(event){
  console.log(event.target.value);
  this.currentDeviceType=event.target.value;
  
  if(event.target.value === 'Others' ) {
   // console.log("Selected Value is custom");
    //this.customInputValue();
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
      this.customdeviceName=data.values[0]
      let indexNumber=this.checkForValue(data.values[0]);
      console.log(indexNumber);
      if(indexNumber===-1){
         this.deviceTypes.push(data.values[0])
        this.currentDeviceType=data.values[0];
      }else{
        this.currentDeviceType=data.values[0];
      }
    }));

   

    
};

addClasses() {
  console.log("Selected Type ",this.currentDeviceType);
  console.log("Inside getClasses ", this.mapImageToType.get(this.currentDeviceType));
  if((this.mapImageToType.get(this.currentDeviceType))==undefined ) {
    console.log(this.mapImageToType.get(this.currentDeviceType))
    return this.mapImageToType.get('Others');
  }else{
  return this.mapImageToType.get(this.currentDeviceType);
  }
}

checkForValue(customDeviceName){
  console.log(customDeviceName)
  let returnValue=-1;
    this.deviceTypes.forEach(function(value)  {
      if(customDeviceName === value){
         returnValue=0;
      }
    });
    return returnValue;
  }

  updateDeviceDetails() {

    console.log(this.updateDeviceDetailForm.value);
    if(this.deviceTypes.length>this.deviceTypesCount) {
      console.log("Device Types has changed ",this.deviceTypes);
       
       const updatedDeviceTypes={device_types:this.deviceTypes}
      
       console.log("JSON version of DeviceTypes ",updatedDeviceTypes);
       const updatedDeviceTy=JSON.stringify(updatedDeviceTypes);
      console.log("Updated Device Type added ", JSON.stringify(updatedDeviceTypes));
         this.deviceModalService.saveDeviceTypes(updatedDeviceTypes).subscribe(
           (response)=>{
             console.log("Result",response);
           }
         )
    }
      console.log("Room Data from Storage Service",this.currentRoom);
      const {device_config}=this.currentRoom;
      this.devicesArr=device_config;
      console.log("Current device=",this.currentDevice);
      const id=this.devicesArr.findIndex(index=>index.name===this.currentDevice);
       this.updatedDevice=this.devicesArr[id];
      console.log("Printing current device",this.devicesArr[id]);
      this.currentRoom;
      this.updatedDevice.name=this.updateDeviceDetailForm.controls['deviceName'].value;
      this.updatedDevice.type=this.updateDeviceDetailForm.controls['deviceType'].value;
     
      this.updatedDevice.schedule=[];
      this.formatScheduleString(this.updateDeviceDetailForm.controls['startTime'].value);
      this.formatScheduleString(this.updateDeviceDetailForm.controls['endTime'].value);
      this.devicesArr[id]=this.updatedDevice;
      console.log( this.devicesArr[id]);
      console.log("Final Room Data to POST Call",this.currentRoom);
      this.deviceModalService.saveDevice(this.currentRoom).pipe(takeUntil(this.deviceConfigUnsubscribe)).subscribe(
        (response)=>{
          console.log("Response for Device POST call",response);
          this.route.navigate(['/home/devices'],{queryParams:{id:this.currentDeviceId}});
         // this.route.navigateByUrl("/home/devices");
        },
        (error)=>{
          console.log("Error: ",error);
        }
      )

  }

  formatScheduleString(startOrEndTime:string) {
    console.log(startOrEndTime);
    if(!startOrEndTime==undefined) {
    let time=startOrEndTime.split(':');
    console.log("Time : ",time);
    this.updatedDevice.schedule.push(parseInt(time[0]));
    this.updatedDevice.schedule.push(parseInt(time[1]));
    console.log(this.updatedDevice.schedule);
    }
  }
}