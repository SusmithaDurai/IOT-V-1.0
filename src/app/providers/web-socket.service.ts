import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private socket:Socket) { }

  public getStatus = () => {
    return Observable.create((observer) => {
            this.socket.on('status', (status) => {
                observer.next(status);
            });
    });
}
}
