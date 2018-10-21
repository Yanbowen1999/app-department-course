import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicmyseenComponent } from './licmyseen.component';

describe('LicmyseenComponent', () => {
  let component: LicmyseenComponent;
  let fixture: ComponentFixture<LicmyseenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicmyseenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicmyseenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
