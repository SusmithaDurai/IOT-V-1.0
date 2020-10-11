import { RoutingURLService } from './providers/routing-url.service';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { NgModule, ErrorHandler } from '@angular/core';
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
import {Storage,IonicStorageModule} from '@ionic/storage';
import { StorageService } from './providers/storage.service';
import { IotErrorHandlerService } from './providers/messages/iot-error-handler.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

Amplify.configure(awsconfig);

const iotConfig: SocketIoConfig = { url: 'http://3.137.85.184:80/', options: {} };

@NgModule({
  declarations: [AppComponent,WelcomeComponent],
  entryComponents: [],
  imports: [
            AmplifyUIAngularModule,
            BrowserModule, 
            IonicModule.forRoot(), 
            SocketIoModule.forRoot(iotConfig),
            AppRoutingModule,
            HttpClientModule,
            IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    CognitoService,
    DatePipe,
    CookieService,
    StorageService,
    RoutingURLService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: ErrorHandler, useClass: IotErrorHandlerService}
  ],
  exports:[AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
