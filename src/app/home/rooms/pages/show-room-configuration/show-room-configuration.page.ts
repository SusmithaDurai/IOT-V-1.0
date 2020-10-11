import { RoomTypes } from './../../models/room-types';
import { RoomsRestDatasourceService } from './../../services/rooms-rest-datasource.service';
import { Room } from './../../models/room';
import { IotApiService } from 'src/app/providers/iot-api.service';
import { StorageService } from './../../../../providers/storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomData } from '../../models/room-data';
import { Storage } from '@ionic/storage';
import { RoomsModalService } from '../../services/rooms-modal.service';
import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-show-room-configuration',
  templateUrl: './show-room-configuration.page.html',
  styleUrls: ['./show-room-configuration.page.scss'],
})
export class ShowRoomConfigurationPage implements OnInit, OnDestroy {
  private roomConfigUnsubscribe = new Subject<void>();
  private roomTypes: string[];
  private updatedRoomTypes:RoomTypes;
  private customRoomName: string;
  private currentRoom: string;
  private currentRoomType: string;
  rooms:RoomData[];
  updateRoomDetailForm: FormGroup;
  currentRoomParams: any;
  room: RoomData;
  roomTypesCount: number;
  roomList: RoomData[];
  mapImageToType = new Map();
  private locator = (r: RoomData, id: string) => r.device_id == id;

  constructor(private alertController: AlertController,
    private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private storage: StorageService, private iotService: IotApiService,
    private roomsModalService: RoomsModalService, private route: Router, private roomService: RoomsRestDatasourceService) {
    this.currentRoomParams = this.activatedRoute.queryParams.pipe(takeUntil(this.roomConfigUnsubscribe)).subscribe(params => {

      console.log("Parameters", params.device_id, params.roomType, params.roomName);

      this.currentRoomParams = params;
    });
  }
  ngOnDestroy(): void {
    this.roomConfigUnsubscribe.next();
    this.roomConfigUnsubscribe.complete();
  }



  ngOnInit() {

    this.mapImageToType.set('Living room', 'livingRoom');
    this.mapImageToType.set('Bed room', 'bedRoom');
    this.mapImageToType.set('Hall', 'hallRoom');
    this.mapImageToType.set('Others', 'default');

    this.updateRoomDetailForm = this.formBuilder.group({
      roomType: ['', Validators.required],
      roomName: ['', Validators.required]
    });

    this.storage.getRooms().pipe(takeUntil(this.roomConfigUnsubscribe)).subscribe(
      (response)=>{
        console.log("Response from Storage",response);
        this.rooms=JSON.parse(response);
        
        const roomIndex= this.rooms.findIndex(item => this.locator(item, this.currentRoomParams.device_id));
        console.log("Room List from Storage",this.rooms);
        console.log("Room data",roomIndex);
        this.updateRoomDetailForm.patchValue({
          roomType: this.rooms[roomIndex].room_type,
          roomName: this.rooms[roomIndex].room_name
        });
        this.currentRoomType = this.rooms[roomIndex].room_type;
        this.room=this.rooms[roomIndex];
    });

    this.storage.getRoomTypes().then((types) => {
      console.log("Room Types",types);
      this.roomTypes = types;
      this.roomTypesCount = types.length;
      console.log("Room Types", this.roomTypes);
    });

    this.addClasses();

  }


  addClasses() {
    console.log("Inside getClasses ", this.mapImageToType.get(this.currentRoomType));
    if ((this.mapImageToType.get(this.currentRoomType)) == null) {
      return this.mapImageToType.get('Others');
    } else {
      return this.mapImageToType.get(this.currentRoomType);
    }
  }

  selectedValue(event) {
    console.log(event.target.value);
    this.currentRoomType = event.target.value;

    if (event.target.value === 'Others') {
      this.customInputValue();
      this.currentRoomType = 'Others';
    }
    this.addClasses();

  }

  async customInputValue() {
    const inputAlert = await this.alertController.create({
      header: 'Enter your custom type:',
      inputs: [{ type: 'text', placeholder: 'type in' }],
      buttons: [{ text: 'Cancel' }, { text: 'Ok' }]
    });

    await inputAlert.present();
    let result = await inputAlert.onDidDismiss().then((result => {
      const { data } = result;
      this.customRoomName = data.values[0]
      let indexNumber = this.checkForValue(data.values[0]);
      console.log(indexNumber);
      if (indexNumber === -1) {
        this.roomTypes.push(data.values[0])
        this.currentRoom = data.values[0];
        this.currentRoomType = 'Others';
      } else {
        this.currentRoom = data.values[0];
      }
    }));



  };

  checkForValue(customRoomName) {
    console.log(customRoomName)
    let returnValue = -1;
    this.roomTypes.forEach(function (value) {
      if (customRoomName === value) {
        returnValue = 0;
      } 
    });
    return returnValue;
  }

  private removeRoom(deviceId:string) {

  }

  updateRoomDetails() {

    if (!this.updateRoomDetailForm.valid) {
      alert("Please provide required details");
      return false;
    } else {
      console.log(this.updateRoomDetailForm.value);
      if (this.roomTypes.length > this.roomTypesCount) {
        console.log("New Room Type added ", this.roomTypes);
      const updatedroomTypes={room_types:this.roomTypes}
      
      console.log("JSON version of RoomTypes ",updatedroomTypes);

     console.log("Updated Room Type added ", JSON.stringify(updatedroomTypes));
        this.roomsModalService.saveRoomTypes(JSON.stringify(updatedroomTypes)).subscribe(
          (response)=>{
            console.log("Result",response);
          }
        )
      }
      console.log("RoomData values",this.room);
      this.room.room_name=this.updateRoomDetailForm.controls['roomName'].value;
      this.room.room_type=this.updateRoomDetailForm.controls['roomType'].value;
      this.room.device_id=this.currentRoomParams.device_id;
      console.log("Room Data with Type", this.room);


          this.roomService.saveRoom(this.room).pipe(takeUntil(this.roomConfigUnsubscribe))
          .subscribe(
            (response) => {

              console.log("Response from server", response);
              this.route.navigateByUrl("/home/rooms");
            },
            (error) => {
              throwError(error);
            }
          );

    }
  }

}
