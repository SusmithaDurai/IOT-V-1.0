import { CognitoService } from '../providers/cognito-service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { userInfo } from '../providers/user-info';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
@Input() headerTitle : string;
  userinfo :userInfo;
  constructor(private router:ActivatedRoute,private cogservice : CognitoService,private http:HttpClientModule,private cookie:CookieService) {
   
  }

  ngOnInit() {
   /* this.router.fragment.subscribe((params)=>{
      const fragments=params.split('&');
      const paramsMap={};
      fragments.forEach((fragment) => {
        const keyValue=fragment.split('=');
        paramsMap[keyValue[0]]=keyValue[1];
       
      });
      let id_token=paramsMap["id_token"];
      this.cogservice.setData(paramsMap);
    })
    this.cogservice.getUserInfo().subscribe(data=>{
      this.userinfo=data;
      console.log(this.userinfo.username);
      this.cookie.set('UserName',this.userinfo.username);
      this.cookie.set('Email',this.userinfo.email);
    });*/




  }

  

}
