import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicmyfocusComponent } from './licmyfocus.component';

describe('LicmyfocusComponent', () => {
  let component: LicmyfocusComponent;
  let fixture: ComponentFixture<LicmyfocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicmyfocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicmyfocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
