import { deviceConfiguration } from './deviceConfiguration';

// FIXME :: This should be under models. Use proper naming conventions
export interface devices {
    device_id :string;
    type:string;
     device_config: deviceConfiguration[];
}   