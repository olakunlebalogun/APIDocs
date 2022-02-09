import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMerchantComponent } from './pay-merchant.component';

describe('PayMerchantComponent', () => {
  let component: PayMerchantComponent;
  let fixture: ComponentFixture<PayMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
