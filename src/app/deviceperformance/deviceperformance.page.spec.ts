import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceperformancePage } from './deviceperformance.page';

describe('DeviceperformancePage', () => {
  let component: DeviceperformancePage;
  let fixture: ComponentFixture<DeviceperformancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceperformancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceperformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
