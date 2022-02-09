import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentChargeRetrievePororationComponent } from './payment-charge-retrieve-pororation.component';

describe('PaymentChargeRetrievePororationComponent', () => {
  let component: PaymentChargeRetrievePororationComponent;
  let fixture: ComponentFixture<PaymentChargeRetrievePororationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentChargeRetrievePororationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentChargeRetrievePororationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
