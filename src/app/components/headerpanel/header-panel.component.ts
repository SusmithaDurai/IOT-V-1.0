import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headerpanel',
  templateUrl: './headerpanel.component.html',
  styleUrls: ['./headerpanel.component.scss'],
})
export class HeaderpanelComponent implements OnInit {
 @Input() title :string;
  constructor() {
   }
  
  ngOnInit() {

    console.log(this.title);
  }

}
