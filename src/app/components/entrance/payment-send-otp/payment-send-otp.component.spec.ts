import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSendOtpComponent } from './payment-send-otp.component';

describe('PaymentSendOtpComponent', () => {
  let component: PaymentSendOtpComponent;
  let fixture: ComponentFixture<PaymentSendOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSendOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSendOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
