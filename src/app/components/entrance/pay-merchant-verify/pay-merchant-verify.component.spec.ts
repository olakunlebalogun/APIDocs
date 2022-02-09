import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMerchantVerifyComponent } from './pay-merchant-verify.component';

describe('PayMerchantVerifyComponent', () => {
  let component: PayMerchantVerifyComponent;
  let fixture: ComponentFixture<PayMerchantVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayMerchantVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMerchantVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
