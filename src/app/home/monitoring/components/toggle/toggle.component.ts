import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {

  @Input() id: string;

  value: boolean=false;
  changed:boolean=false;

  @Output() updateStatus=new EventEmitter();

  constructor() { }
  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //  console.log(this.value);
  // }

  ngOnInit() {}

  

  setDeviceStatus(event){
    this.value = event.target.checked;
    this.changed=true;
    console.log(event.target);
    this.updateStatus.emit(event);
  } 

}
