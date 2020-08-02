import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceSetUpPage } from './device-setup.page';

describe('DeviceSetUpPage', () => {
  let component: DeviceSetUpPage;
  let fixture: ComponentFixture<DeviceSetUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSetUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceSetUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
