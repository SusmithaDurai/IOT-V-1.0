import { DeviceData } from './device-data';

export interface RoomSetUp {
    device_id :string;
    room_type:string;
    room_name:string;
    device_config:DeviceData[];

} 