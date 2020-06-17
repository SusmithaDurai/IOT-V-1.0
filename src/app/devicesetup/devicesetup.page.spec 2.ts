import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevicesetupPage } from './devicesetup.page';

describe('DevicesetupPage', () => {
  let component: DevicesetupPage;
  let fixture: ComponentFixture<DevicesetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevicesetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
