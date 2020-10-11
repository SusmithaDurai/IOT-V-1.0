import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './components/toggle/toggle.component';



@NgModule({
  declarations: [ToggleComponent],
  exports :[ToggleComponent],
  
  imports: [
    CommonModule
  ]
})
export class MonitoringComponentsModule { }
