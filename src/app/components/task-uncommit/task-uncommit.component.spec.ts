import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUncommitComponent } from './task-uncommit.component';

describe('TaskUncommitComponent', () => {
  let component: TaskUncommitComponent;
  let fixture: ComponentFixture<TaskUncommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUncommitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUncommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
