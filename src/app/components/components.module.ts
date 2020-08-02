import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { AddDeviceBtnComponent } from './add-device-btn/add-device-btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPanelComponent } from './header-panel/header-panel.component';
import { DeviceBlockPanelComponent } from './device-block-panel/device-block-panel.component';



@NgModule({
  declarations: [AddDeviceBtnComponent,BarcodeScannerComponent,HeaderPanelComponent,DeviceBlockPanelComponent],
  exports : [AddDeviceBtnComponent,BarcodeScannerComponent,HeaderPanelComponent,DeviceBlockPanelComponent],
  imports: [
    CommonModule,
    
  ]
})
export class ComponentsModule { }
