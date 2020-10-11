import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusMonitoringPage } from './status-monitoring.page';

describe('StatusMonitoringPage', () => {
  let component: StatusMonitoringPage;
  let fixture: ComponentFixture<StatusMonitoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMonitoringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusMonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
