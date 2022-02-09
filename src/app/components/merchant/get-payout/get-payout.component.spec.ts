import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPayoutComponent } from './get-payout.component';

describe('GetPayoutComponent', () => {
  let component: GetPayoutComponent;
  let fixture: ComponentFixture<GetPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
