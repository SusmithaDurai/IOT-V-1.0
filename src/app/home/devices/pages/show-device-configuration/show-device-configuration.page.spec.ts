import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowDeviceConfigurationPage } from './show-device-configuration.page';

describe('ShowDeviceConfigurationPage', () => {
  let component: ShowDeviceConfigurationPage;
  let fixture: ComponentFixture<ShowDeviceConfigurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeviceConfigurationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDeviceConfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
