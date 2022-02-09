import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentChargeRetrieveComponent } from './payment-charge-retrieve.component';

describe('PaymentChargeRetrieveComponent', () => {
  let component: PaymentChargeRetrieveComponent;
  let fixture: ComponentFixture<PaymentChargeRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentChargeRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentChargeRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
