import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPinCreateComponent } from './transaction-pin-create.component';

describe('TransactionPinCreateComponent', () => {
  let component: TransactionPinCreateComponent;
  let fixture: ComponentFixture<TransactionPinCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPinCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionPinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
