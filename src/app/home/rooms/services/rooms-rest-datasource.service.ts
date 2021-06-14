import { RoomTypes } from './../models/room-types';
import { catchError } from 'rxjs/operators';
import { RoomData } from '../models/room-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export const REST_URL=new InjectionToken<string>('rest_url');

@Injectable({
  providedIn: 'root'
})
export class RoomsRestDatasourceService {

 RESTURL:string="http://3.137.85.184/discover/devices";
// RESTURL:string="/assets/data/rooms.json";

// ROOMTYPEURL:string="/assets/data/room-types.json";

 ROOMTYPEURL:string="http://3.137.85.184/list/room/types";

 ROOMLISTURL:string="http://3.137.85.184/list/rooms";


 INSERTROOMTYPEURL:string="http://3.137.85.184/update/room/types";



  constructor(private httpClient:HttpClient,@Inject(REST_URL) private url:string) { }

  getRooms():Observable<any> {
    //return this.httpClient.get<any>(this.url);
   // return this.httpClient.get(this.RESTURL);
    return this.sendRequest<any>("GET",this.RESTURL);
  }

  getRoomNameLists() :Observable<any>{
    return this.sendRequest<any>("GET",this.ROOMLISTURL);
  }

  saveRoom(room:RoomData):Observable<RoomData> {
    
    return this.sendRequest<RoomData>("POST",'http://3.137.85.184/update/device/config',room);
   
  } 

  getRoomTypes() {
    return this.sendRequest<any>("GET",this.ROOMTYPEURL);
    //return this.httpClient.get(this.ROOMTYPEURL);
  }

  saveRoomTypes(roomTypes:RoomTypes):Observable<any>{
    return this.sendRequest<RoomTypes>("POST",this.INSERTROOMTYPEURL,roomTypes);
  }



  private sendRequest<T>(verb:string,url:string,body?:any):Observable<T>{
    return this.httpClient.request<T>(verb,url,{
      body:body,
      headers:new HttpHeaders({
        'Content-Type' : 'application/json'
        //'Authorization' :'Bearer ${Auth.gettoken()}',
      })
    }).pipe(catchError((error:Response)=>
      throwError(error)));
    
  }
}
