import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateComplianceComponent } from './add-update-compliance.component';

describe('AddUpdateComplianceComponent', () => {
  let component: AddUpdateComplianceComponent;
  let fixture: ComponentFixture<AddUpdateComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
