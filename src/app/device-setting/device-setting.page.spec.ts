import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceSettingPage } from './device-setting.page';

describe('DeviceSettingPage', () => {
  let component: DeviceSettingPage;
  let fixture: ComponentFixture<DeviceSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
