import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceMonitoringPage } from './device-monitoring.page';

describe('DeviceMonitoringPage', () => {
  let component: DeviceMonitoringPage;
  let fixture: ComponentFixture<DeviceMonitoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMonitoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceMonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
