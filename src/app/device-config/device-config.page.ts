import { Router } from '@angular/router';
import { switchInfo } from './../providers/switch-info';
import { IotApiService } from './../providers/iot-api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { Observable } from 'rxjs';
import { devices } from '../providers/devices';
import { deviceConfiguration } from '../providers/deviceConfiguration';

@Component({
  selector: 'app-device-config',
  templateUrl: './device-config.page.html',
  styleUrls: ['./device-config.page.scss'],
})
export class DeviceConfigPage implements OnInit {
 devices:devices[];
 deviceConfigurations : deviceConfiguration[];
 getDeviceDetailsObserver : any;

 showDevices : boolean=false; // FIXME:: No need to do both assignment and types

//ngModel variable for Selected device from dropdown
 deviceId : string;

  
 
  constructor(private iotService:IotApiService,private router:Router) {
    
   }

  ngOnInit() {
    console.log("Calling REST API......");

    // FIXME:: any observable should be destroyed properly.
   this.getDeviceDetailsObserver=this.iotService.getDeviceDetails().subscribe(data=>{
     const {devices}=data;
    this.devices=devices;

  //const {devices:[...rest]}=data;
  //const {device_config}=rest;
   //this.deviceConfigurations=device_config;
    console.log("Array Values ",devices);
   //console.log("Elements ",device_config);
   //this.devicec=device_config;
   //console.log("Destrucuturing Values ",this.devices[0].device_id);
  
   })
  }

  ionViewWillEnter(){
    this.deviceId=this.devices[0].device_id;
    
    }
  OnDestroy() {
    this.getDeviceDetailsObserver.unsubscribe();
    }

  getDeviceDetails() {
  //   console.log("Calling REST API......");
  //  this.iotService.getDeviceDetails().subscribe(data=>{
  //    const {devices}=data;
  //    this.devices=devices;
  //   console.log("Array Values ",this.devices);
   
      //this.info=this.devices;
      //this.iotService=this.devices.getdevices;
    // console.log(this.devices);
    
  }

  ngOnDestroy(){
    this.iotService.deviceConfigurations().subscribe
  }

  // selectedDevice(items){

  //   this.showDevices=true;
  //   console.log("Selected Device is : ",items.detail.value);
  //   this.iotService.deviceConfigurations().subscribe(data=>{
  //     const {device_config} = data;
  //     this.deviceConfigurations=device_config;
  //     this.iotService.setDeviceConfiguration(this.deviceConfigurations);
  //    console.log("Device Configurations ",this.deviceConfigurations[0].name);

  //   })


  }

  // switchSetup(deviceName){
  //   console.log("Clicked Device ",deviceName);
  //   const found=this.deviceConfigurations.find(element=>element.name==deviceName); // FIXME:: give proper name
  //   console.log("Array  Device ",found);
  //   this.router.navigate(['/home/device-setting/switchsetup'],{queryParams:{deviceName:deviceName}});

  // }

//}
