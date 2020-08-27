import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowRoomConfigurationPage } from './show-room-configuration.page';

describe('ShowRoomConfigurationPage', () => {
  let component: ShowRoomConfigurationPage;
  let fixture: ComponentFixture<ShowRoomConfigurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRoomConfigurationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowRoomConfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
