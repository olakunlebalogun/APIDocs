import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentVerifyOtpComponent } from './payment-verify-otp.component';

describe('PaymentVerifyOtpComponent', () => {
  let component: PaymentVerifyOtpComponent;
  let fixture: ComponentFixture<PaymentVerifyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentVerifyOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentVerifyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
