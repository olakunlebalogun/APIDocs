import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplianceComponent } from './get-compliance.component';

describe('GetComplianceComponent', () => {
  let component: GetComplianceComponent;
  let fixture: ComponentFixture<GetComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
