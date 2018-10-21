import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEndComponent } from './task-end.component';

describe('TaskEndComponent', () => {
  let component: TaskEndComponent;
  let fixture: ComponentFixture<TaskEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
