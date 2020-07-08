import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { AdddevicebtnComponent } from './adddevicebtn/adddevicebtn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderpanelComponent } from './headerpanel/header-panel.component';



@NgModule({
  declarations: [AdddevicebtnComponent,BarcodeScannerComponent,HeaderpanelComponent],
  exports : [AdddevicebtnComponent,BarcodeScannerComponent,HeaderpanelComponent],
  imports: [
    CommonModule,
    
  ]
})
export class ComponentsModule { }
