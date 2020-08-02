import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devicesetting',
  templateUrl: './device-setting.page.html',
  styleUrls: ['./device-setting.page.scss'],
})
export class DeviceSettingPage implements OnInit {
  
  constructor(private router:Router) {

   }

  ngOnInit() {
  }

  onEnter(){
    console.log("Inside On Enter");
    this.router.navigate(['/device-config']);
  }

}
