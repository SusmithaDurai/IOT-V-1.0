import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { deviceData } from '../../models/deviceData';

@Component({
  selector: 'app-create-new-device',
  templateUrl: './create-new-device.component.html',
  styleUrls: ['./create-new-device.component.scss'],
})
export class CreateNewDeviceComponent implements OnInit {
  @Input()
  listOfdevices:deviceData[];
  mapImageToType=new Map();
  
  @Output() updatedevice=new EventEmitter();
  constructor() { }

  ngOnInit() {

    this.mapImageToType.set('Fan0','fanRed');
    this.mapImageToType.set('Air Conditioner0','airConditionerRed');
    this.mapImageToType.set('Light0','lightRed');

    this.mapImageToType.set('Fan1','fanGreen');
    this.mapImageToType.set('Air Conditioner1','airConditionerGreen');
    this.mapImageToType.set('Light1','lightGreen');

    this.mapImageToType.set('Fan2','fanGrey');
    this.mapImageToType.set('Air Conditioner2','airConditionerGrey');
    this.mapImageToType.set('Light2','lightGrey');

    //mapImageToType.set('Bath room','bath_room');
    //mapImageToType.set('Portico','portico');
    this.mapImageToType.set('Custom','default');
  }

  managedeviceDetails(device) {
   this.updatedevice.emit(device);
  }

  addClasses(deviceType) {
    let status=2;
   // console.log("Input for the function ",deviceType+"-"+status);
   // console.log("Inside getClasses ",this.mapImageToType.get(deviceType+status));
    return this.mapImageToType.get(deviceType+status);
  }

}
