import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddevicebtn',
  templateUrl: './add-device-btn.component.html',
  styleUrls: ['./add-device-btn.component.scss'],
})
export class AddDeviceBtnComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {}

  accessbarcode(){
    console.log("Inside Barcode function");
    
    this.route.navigate(['/home/device-setting']);
  }

}
