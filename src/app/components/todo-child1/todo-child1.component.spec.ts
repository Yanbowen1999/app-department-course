import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoChild1Component } from './todo-child1.component';

describe('TodoChild1Component', () => {
  let component: TodoChild1Component;
  let fixture: ComponentFixture<TodoChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
