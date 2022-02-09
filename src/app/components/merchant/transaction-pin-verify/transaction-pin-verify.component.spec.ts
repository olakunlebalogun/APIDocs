import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPinVerifyComponent } from './transaction-pin-verify.component';

describe('TransactionPinVerifyComponent', () => {
  let component: TransactionPinVerifyComponent;
  let fixture: ComponentFixture<TransactionPinVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPinVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPinVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
