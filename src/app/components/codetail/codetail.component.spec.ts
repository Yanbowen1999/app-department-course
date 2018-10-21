import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetailComponent } from './codetail.component';

describe('CodetailComponent', () => {
  let component: CodetailComponent;
  let fixture: ComponentFixture<CodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
