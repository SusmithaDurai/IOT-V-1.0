import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoverRoomsPage } from './discover-rooms.page';

describe('DiscoverRoomsPage', () => {
  let component: DiscoverRoomsPage;
  let fixture: ComponentFixture<DiscoverRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverRoomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
