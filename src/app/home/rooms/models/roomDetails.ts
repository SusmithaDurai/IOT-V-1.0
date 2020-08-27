import { deviceData } from './deviceData';

export interface roomDetails {
    device_id :string;
    device_type:string;
    num_relays:number;
    room_type:string;
    room_name:string;
    device_config:deviceData[];

} 