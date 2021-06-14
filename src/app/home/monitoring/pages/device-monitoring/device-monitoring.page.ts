import { SetDeviceStatus } from './../../../devices/models/set-device-status';
import { ToggleComponent } from './../../components/toggle/toggle.component';
import { DeviceData } from 'src/app/home/devices/models/device-data';
import { DevicesModalService } from './../../../devices/services/devices-modal.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ElementRef, OnDestroy, ViewContainerRef, Output, EventEmitter, Input } from '@angular/core';
import { MonitoringModalService } from '../../services/monitoring-modal.service';
import { Observable, Subject } from 'rxjs';
import { DeviceStatus } from 'src/app/home/devices/models/device-status';
import { Socket } from 'ngx-socket-io';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-device-monitoring',
  templateUrl: './device-monitoring.page.html',
  styleUrls: ['./device-monitoring.page.scss'],
})
export class DeviceMonitoringPage implements OnInit, OnDestroy, AfterViewInit {
  private deviceMonitoringUnsubscribe = new Subject<void>();
  pageHeaderTitle: string;
  currentRoomName: string;
  currentDeviceId: string;
  listOfDevices: string[];
  deviceConfig: DeviceData[] = [];
  showDevices: boolean = false;
  deviceStatus: DeviceStatus;
  mapImageToType = new Map();
  setRelayStatus: SetDeviceStatus;


  //@Input() updateStatus=new EventEmitter();

  @ViewChildren(ToggleComponent) rows: QueryList<ToggleComponent>;

  constructor(private activateRouter: ActivatedRoute, private deviceModalService: DevicesModalService,
    private monitoringModalService: MonitoringModalService, private socket: Socket, private element: ElementRef) {
    this.activateRouter.queryParams.pipe(takeUntil(this.deviceMonitoringUnsubscribe)).subscribe(
      (response) => {
        console.log(response);
        const { roomName } = response;
        const { device_id } = response;
        this.currentDeviceId = device_id;

        this.pageHeaderTitle = roomName ? roomName : this.currentDeviceId;
        this.currentRoomName = roomName;
      }
    )
  }

  setDeviceStatus($event) {

    let status:string='';
    console.log("Inside Toggle Component Click");
    const values = this.rows.forEach(toggle => {
      const { id = '', value = '', changed } = toggle;
      console.log(id + ' : ' + value)

      if (changed) {
        let idValue = id.split('-')[1];

        status=status.concat(value ? '1' : '0');

      } else {
        let idValue = id.split('-')[1];
        status=status.concat('2');
      }


    }


    );
    console.log("Relay_status", status);
    this.setRelayStatus = { device_id: this.currentDeviceId, relay_status: status }
    
    console.log(this.setRelayStatus);
    this.deviceModalService.setRelayStatus(this.setRelayStatus).pipe(takeUntil(this.deviceMonitoringUnsubscribe)).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

  ionViewDidLoad() {
    //console.log("After Did Load",this.toggleInfo.toArray);
    console.log('Rows SIze:' + this.rows.length);
    this.rows.forEach(console.log);
  }


  ngAfterViewInit(): void {
    console.log("Inside AfterViewInit")
    console.log('Rows SIze:' + this.rows.length);
    this.rows.forEach(console.log);
    console.log(this.element);
  }

  ngOnInit() {
    this.socket.connect();
    

    this.showDevices = false;
    this.deviceModalService.getDevices(this.currentDeviceId).pipe(takeUntil(this.deviceMonitoringUnsubscribe)).subscribe(

      (response) => {
        console.log("Result for Devices ", response);
        const { device_config } = response;
        this.deviceConfig = device_config;

        // console.log("List Of Devices length", this.deviceConfig.length);

        if (this.deviceConfig.length < 1) {
          console.log("Empty List Of Devices");
          this.showDevices = true;
        }

        console.log(this.deviceConfig);
      },
      (error) => {
        console.log("ERROR Occured ", error);
      });

  }

  ngOnDestroy(): void {
    this.deviceMonitoringUnsubscribe.next();
    this.deviceMonitoringUnsubscribe.complete();
  }

  addClasses(type: string, status: number = 2) {
    type = type.replace(/ +/g, '-');
    type = type.toLowerCase();
    console.log("Device Type ", type + status);
    return type + status;
  }

  ionViewWillEnter() {
    this.deviceModalService.getRelayStatus(this.currentDeviceId).pipe(takeUntil(this.deviceMonitoringUnsubscribe)).subscribe(
      (response) => {

        this.deviceStatus = response;
        if (this.deviceConfig.length > 0) {
          console.log("Device Config ", this.deviceConfig);
          const status = this.deviceStatus.relay_status;
          console.log("Device Status ", status);

          for (let i = 0; i < this.deviceConfig.length; i++) {

            this.deviceConfig[i].device_id = this.deviceStatus.device_id;
            this.deviceConfig[i].time_stamp = this.deviceStatus.time_stamp;
            this.deviceConfig[i].status = status[i];
            console.log("Device status into device config ", status[i]);

          }
        }

        console.log("Device Status ", this.deviceStatus.relay_status);

      },
      (error) => {
        console.log(error);
      });


  }


  ionViewWillLeave() {
    this.socket.disconnect();
  }

  ionViewDidEnter() {
    this.socket.fromEvent('server-event').subscribe(
      response => {

        console.log("Device Status ", response['status']);
        console.log("DeviceID ", response['device_id']);
        console.log("Device Timestamp ", response['time_stamp']);

        const status = response['relay_status'];
        console.log("Device Status ", status);
        if (this.deviceConfig.length > 0) {
          console.log("Length of Device Config", this.deviceConfig.length);

          for (let i = 0; i < this.deviceConfig.length; i++) {

            this.deviceConfig[i].device_id = response['device_id'];
            this.deviceConfig[i].time_stamp = response['time_stamp'];
            this.deviceConfig[i].status = status[i];
            console.log("Device status into device config ", status[i]);

          }
        }
        console.log("Final Device Config Print", this.deviceConfig);

      });

  }

}
