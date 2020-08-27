import { IotApiService } from './../providers/iot-api.service';

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { devices } from '../providers/devices';

@Component({
  selector: 'app-devicesetup',
  templateUrl: './device-setup.page.html',
  styleUrls: ['./device-setup.page.scss'],
})
export class DeviceSetUpPage implements OnInit {
  devices:devices[];
  constructor(private iotService:IotApiService,private router:Router) {

  }
  
  ngOnInit() {

    // this.iotService.listAllDevices().subscribe(data=>{
    //   const {devices}=data;
    // this.devices=devices;
    // })
  }

 

}
