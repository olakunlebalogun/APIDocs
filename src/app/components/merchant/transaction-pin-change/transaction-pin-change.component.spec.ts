import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPinChangeComponent } from './transaction-pin-change.component';

describe('TransactionPinChangeComponent', () => {
  let component: TransactionPinChangeComponent;
  let fixture: ComponentFixture<TransactionPinChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPinChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPinChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
