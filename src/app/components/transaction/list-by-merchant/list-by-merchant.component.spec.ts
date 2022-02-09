import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByMerchantComponent } from './list-by-merchant.component';

describe('ListByMerchantComponent', () => {
  let component: ListByMerchantComponent;
  let fixture: ComponentFixture<ListByMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListByMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
