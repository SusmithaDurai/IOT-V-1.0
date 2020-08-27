import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoverDevicesOnRoomsPage } from './discover-devices-on-rooms.page';

describe('DiscoverDevicesOnRoomsPage', () => {
  let component: DiscoverDevicesOnRoomsPage;
  let fixture: ComponentFixture<DiscoverDevicesOnRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverDevicesOnRoomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverDevicesOnRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
