import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwitchsetupPage } from './switchsetup.page';

describe('SwitchsetupPage', () => {
  let component: SwitchsetupPage;
  let fixture: ComponentFixture<SwitchsetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchsetupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchsetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
