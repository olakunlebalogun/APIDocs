import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByMerchantEmailComponent } from './list-by-merchant-email.component';

describe('ListByMerchantEmailComponent', () => {
  let component: ListByMerchantEmailComponent;
  let fixture: ComponentFixture<ListByMerchantEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListByMerchantEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByMerchantEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
