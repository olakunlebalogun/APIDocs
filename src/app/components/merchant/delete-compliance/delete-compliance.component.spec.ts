import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComplianceComponent } from './delete-compliance.component';

describe('DeleteComplianceComponent', () => {
  let component: DeleteComplianceComponent;
  let fixture: ComponentFixture<DeleteComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
