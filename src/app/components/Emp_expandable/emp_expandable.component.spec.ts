import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { emp_expandableComponent } from './emp_expandable.component';

describe('emp_expandableComponent', () => {
  let component: emp_expandableComponent;
  let fixture: ComponentFixture<emp_expandableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ emp_expandableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(emp_expandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
