import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeDataComponent } from './add-employee-data.component';

describe('AddEmployeeDataComponent', () => {
  let component: AddEmployeeDataComponent;
  let fixture: ComponentFixture<AddEmployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEmployeeDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
