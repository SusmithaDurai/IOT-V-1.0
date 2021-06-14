import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { userInfo } from './providers/user-info';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  userinfo:userInfo;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cookie:CookieService,
    private router:Router
  ) {
    this.initializeApp();
  }



  ngOnInit(): void {
    const user = this.cookie.get('UserName');
    if (user) {
      this.userinfo = { username: user };
      this.router.navigateByUrl('/home');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }
}
