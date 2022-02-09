import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePayoutComponent } from './add-update-payout.component';

describe('AddUpdatePayoutComponent', () => {
  let component: AddUpdatePayoutComponent;
  let fixture: ComponentFixture<AddUpdatePayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdatePayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdatePayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
