import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittecourseComponent } from './littecourse.component';

describe('LittecourseComponent', () => {
  let component: LittecourseComponent;
  let fixture: ComponentFixture<LittecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
