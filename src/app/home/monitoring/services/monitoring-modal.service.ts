import { Observable } from 'rxjs';
import { MonitoringRestService } from './monitoring-rest.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitoringModalService {

  constructor(private monitoringRestService:MonitoringRestService) { 
    console.log("Inside Montoring Modal Service")
  }

  getDevicesInRoom(roomName:string):Observable<any> {
    return this.monitoringRestService.getDevicesInRoom(roomName);

  }
}
