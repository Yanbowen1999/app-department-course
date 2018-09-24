import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoChild2Component } from './todo-child2.component';

describe('TodoChild2Component', () => {
  let component: TodoChild2Component;
  let fixture: ComponentFixture<TodoChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
