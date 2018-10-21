import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicstudyingComponent } from './licstudying.component';

describe('LicstudyingComponent', () => {
  let component: LicstudyingComponent;
  let fixture: ComponentFixture<LicstudyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicstudyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicstudyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
