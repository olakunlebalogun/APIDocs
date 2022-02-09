import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionPinComponent } from './add-transaction-pin.component';

describe('AddTransactionPinComponent', () => {
  let component: AddTransactionPinComponent;
  let fixture: ComponentFixture<AddTransactionPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransactionPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
