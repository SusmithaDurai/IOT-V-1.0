import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headerpanel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
})
export class HeaderPanelComponent implements OnInit {
 @Input() title :string;
  constructor() {
   }
  
  ngOnInit() {

    console.log(this.title);
  }

}
