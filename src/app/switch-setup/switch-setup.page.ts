import { ActivatedRoute } from '@angular/router';
import { IotApiService } from './../providers/iot-api.service';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { switchsetupmodel } from './switch-setup-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-switchsetup',
  templateUrl: './switch-setup.page.html',
  styleUrls: ['./switch-setup.page.scss'],
})
export class SwitchsetupPage implements OnInit {
switchdetails:FormGroup;
switchFormData : switchsetupmodel;
  myParam: any;

  constructor(private formBuilder : FormBuilder,private iotService:IotApiService,private route:ActivatedRoute,private datePipe: DatePipe) {

    this.myParam = this.route.queryParams.subscribe(params => {
       // (+) converts string 'id' to a number
      console.log("Parameters", params.deviceName);
      this.myParam=params.deviceName;
   });
  }
  

  ngOnInit() {

    this.switchdetails =this.formBuilder.group({

      name:['',Validators.required],
      type : ['',Validators.required],
      scheduled:[''],
      startDate:[''],
      startTime:[''],
      endTime:[''],
      repeat:['']


    });
    console.log("Inside Switch Setup");
    const values=this.iotService.getDeviceConfiguration();
    console.log("Device Configurations inside Switch Setup",values);
    const found=values.find(element=>element.name==this.myParam);
    console.log("Array Found to edit ",found);
    
    this.pad(found.timing[0]);
    this.pad(found.timing[1]);
    this.pad(found.timing[2]);
    this.pad(found.timing[3]);
    
    let sTime=this.pad(found.timing[0])+":"+this.pad(found.timing[1]);//"timing" : [1,5,10,30]},
    let eTime=this.pad(found.timing[2])+":"+this.pad(found.timing[3]);//"timing" : [1,5,10,30]},

  // console.log("Start Time ",sTime);
  // console.log("End Time ",eTime);
    this.switchdetails.patchValue({
      name :found.name,
      scheduled:false,
      startTime :sTime,
      endTime :eTime
    })
  }

  pad(num:string): string {

    // FIXME :: num is already string only
    while (num.toString().length < 2){
      num = "0" + num;
    }
    return num;
}

ionViewDidLeave(){
    console.log(this.switchdetails.value);
    this.iotService.saveSwitchDetails(this.switchdetails.value).subscribe(data=>{
      console.log("After Post Call ",data);
    });
  }

}
