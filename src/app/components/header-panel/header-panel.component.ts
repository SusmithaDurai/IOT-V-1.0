import { RoutingURLService } from './../../providers/routing-url.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router,  ActivatedRoute, RouterStateSnapshot, NavigationEnd } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

import { Location } from '@angular/common';


@Component({
  selector: 'app-headerpanel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss'],
})
export class HeaderPanelComponent implements OnInit {
 @Input() 
 title :string;

 @Input()
 show : boolean=false;
  currentUrl: string;
  previousUrl: string;
  returnUrl: any;
 
  constructor(private router:Router,private routeUrl:ActivatedRoute,private iotRouteService:RoutingURLService) {
    // this.currentUrl = this.router.url;
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {        
    //     this.previousUrl = this.currentUrl;
    //     this.currentUrl = event.url;
    //     console.log("Previous URL ",this.previousUrl);
    //     console.log("Current URL ",this.currentUrl);
    //   };
    // });

  
    // console.log("State URL ",this.state.url);
    // this.returnUrl = this.routeUrl.snapshot.queryParams['returnUrl'] || '/';
    // console.log(this.returnUrl);

   // console.log(router.url);
   console.log(this.iotRouteService.getPreviousUrl());
   }

   
  
  ngOnInit() {

    console.log(this.title);
    console.log(this.show);

    if(this.title==='Configure Room' || this.title==='Configure Device'){
      this.show=true;
    }
    

    // this.router.events
    //     .pipe(filter((e: any) => e instanceof RoutesRecognized),
    //         pairwise()).subscribe((e: any) => {
    //               console.log(e[0].urlAfterRedirects); // previous url
    //         });
  }

  routePage(){
   // alert("Routing page ");
  // this.router.navigateByUrl(this.returnUrl);
  // this.router.navigateByUrl(this.previousUrl);
 //  console.log(this.iotRouteService.getPreviousUrl());
 //  this.router.navigateByUrl(this.iotRouteService.getPreviousUrl());
  }

}
