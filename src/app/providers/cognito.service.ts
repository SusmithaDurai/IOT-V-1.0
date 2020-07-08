import { userInfo } from './userInfo';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  serviceData: string;
   paramTokens={};
   userinfo:userInfo;
  constructor(private http:HttpClient ) { 

  }
  
  getData(){
    console.log("Inside ServiceData");
  }

  setData(params:any){
    this.paramTokens=params;
    
    console.log(this.paramTokens["access_token"]);
    }

  getUserInfo():Observable<userInfo>{
    var headersforToken=new HttpHeaders();

    headersforToken=headersforToken.set('Authorization','Bearer '+
    this.paramTokens["access_token"]);

    return this.http.get<userInfo>('https://iotapp.auth.ap-south-1.amazoncognito.com/oauth2/userInfo',
    {headers:headersforToken
  });
  }
  
}
