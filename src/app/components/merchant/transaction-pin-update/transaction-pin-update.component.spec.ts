import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPinUpdateComponent } from './transaction-pin-update.component';

describe('TransactionPinUpdateComponent', () => {
  let component: TransactionPinUpdateComponent;
  let fixture: ComponentFixture<TransactionPinUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPinUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
