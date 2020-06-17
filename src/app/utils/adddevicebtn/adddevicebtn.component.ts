import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddevicebtn',
  templateUrl: './adddevicebtn.component.html',
  styleUrls: ['./adddevicebtn.component.scss'],
})
export class AdddevicebtnComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {}

  accessbarcode(){
    console.log("Inside Barcode function")
    this.route.navigate(['/home/devicesetting']);
  }

}
