import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevicesettingPage } from './devicesetting.page';

describe('DevicesettingPage', () => {
  let component: DevicesettingPage;
  let fixture: ComponentFixture<DevicesettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevicesettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
