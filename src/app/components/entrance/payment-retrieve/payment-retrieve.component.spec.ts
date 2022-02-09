import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRetrieveComponent } from './payment-retrieve.component';

describe('PaymentRetrieveComponent', () => {
  let component: PaymentRetrieveComponent;
  let fixture: ComponentFixture<PaymentRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
