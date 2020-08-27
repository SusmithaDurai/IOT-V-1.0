import { StorageService } from 'src/app/providers/storage.service';

import { Component, OnInit } from '@angular/core';
import { IotApiService } from 'src/app/providers/iot-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';


@Component({
  selector: 'app-show-device-configuration',
  templateUrl: './show-device-configuration.page.html',
  styleUrls: ['./show-device-configuration.page.scss'],
})
export class ShowDeviceConfigurationPage implements OnInit {
  currentdeviceName: any;
  devices: string[];
  currentDeviceDetails : any;

  private customdeviceName : String;
  private currentDevice:string;

  updateDeviceDetailForm:FormGroup;

  constructor(private route:ActivatedRoute,private alertController:AlertController,private formBuilder : FormBuilder,private storage:StorageService) { 
    this.currentdeviceName = this.route.queryParams.subscribe(params => {
      // (+) converts string 'id' to a number
     console.log("Device Parameters", params.device_name);
     this.currentDevice= params.device_name;
    
  });

  
  //this.updateDeviceDetailForm.patchValue({
    //deviceType:this.currentdeviceParams.roomType,
    //deviceName:this.currentdeviceParams.roomName
  //});
  }

 ngOnInit() {

    

    this.devices=['Light', 'Fan', 'A/C', 'Heater', 'Fire alarm', 'Custom'];
      this.updateDeviceDetailForm =this.formBuilder.group({
        deviceType:['',Validators.required],
        deviceName : ['',Validators.required],
        scheduled : [''],
        startTime:[''],
        endTime:['']
      });

      this.storage.getDevicesList().then((val)=>{
        console.log("Data from STORAGE ",JSON.parse(val));
        this.currentDeviceDetails=JSON.parse(val);
        const id=this.currentDeviceDetails.findIndex(index=>index.name===this.currentDevice);
       console.log("Device Array is ",id);
      let getDeviceDetail=this.currentDeviceDetails[id];
      console.log("Selected Device Details ",getDeviceDetail);
      // this.pad(getDeviceDetail.schedule[0]);
      // this.pad(getDeviceDetail.schedule[1]);
      // this.pad(getDeviceDetail.schedule[2]);
      // this.pad(getDeviceDetail.schedule[3]);
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
        
      });

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

  if(event.target.value === 'Custom' ) {
   // console.log("Selected Value is custom");
    this.customInputValue();
  }
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
         this.devices.push(data.values[0])
        this.currentDevice=data.values[0];
      }else{
        this.currentDevice=data.values[0];
      }
    }));

   

    
};

checkForValue(customDeviceName){
  console.log(customDeviceName)
  let returnValue=-1;
    this.devices.forEach(function(value)  {
      //console.log("For Each Value",value)
      if(customDeviceName === value){
         returnValue=0;
      }else{
        //console.log("Not Same")
      }
    });
    return returnValue;
  }
}