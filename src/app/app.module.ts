import { WelcomeComponent } from './auth/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*AWS-Amplify*/
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from 'src/aws-exports';
import { CognitoService } from './providers/cognito-service';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent,WelcomeComponent],
  entryComponents: [],
  imports: [
            AmplifyUIAngularModule,
            BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            HttpClientModule,
            ],
  providers: [
    StatusBar,
    SplashScreen,
    CognitoService,
    DatePipe,
    CookieService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports:[AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
