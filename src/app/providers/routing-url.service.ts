import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingURLService {
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  private routerEvents:any;
  constructor(private router: Router) {

    this.currentUrl = this.router.url;
    this.routerEvents=router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
   }

   OnDestroy() {
    this.routerEvents.unsubscribe();
   }

   public getPreviousUrl() {
    return this.previousUrl;
  }

}
