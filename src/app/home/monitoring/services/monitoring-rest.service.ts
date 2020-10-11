import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoringRestService {

  DEVICESINROOMURL:string="http://3.137.85.184/list/devices/in/room?room_name=Basement";
  constructor(private httpClient:HttpClient) { }

  getDevicesInRoom(roomName) :Observable<any>{
    return this.sendRequest<any>('GET',this.DEVICESINROOMURL);
  }

  private sendRequest<T>(verb:string,url:string,body?:any):Observable<T>{
    return this.httpClient.request<T>(verb,url,{
      body:body,
      headers:new HttpHeaders({
        //'Content-Type' : 'application/json'
        //'Authorization' :'Bearer ${Auth.gettoken()}',
      })
    }).pipe(catchError((error:Response)=>
    throwError(error)));
  }

  
}
