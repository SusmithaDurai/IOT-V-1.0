import { userInfo } from './../providers/userInfo';
import { CognitoService } from './../providers/cognito.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'aws-amplify';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-devicesetup',
  templateUrl: './devicesetup.page.html',
  styleUrls: ['./devicesetup.page.scss'],
})
export class DevicesetupPage implements OnInit {
 
  constructor(private http: HttpClient,private service:CognitoService,private cookie:CookieService) {}
  
  userinfo :userInfo;
  ngOnInit() {
    // this.service.getUserInfo().subscribe(data=>{
    //   this.userinfo=data;
    //   console.log(this.userinfo.username);
    //   this.cookie.set('UserName',this.userinfo.username);
    //   this.cookie.set('Email',this.userinfo.email);
    // });
  }

 

}
