import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantPhotoComponent } from './merchant-photo.component';

describe('MerchantPhotoComponent', () => {
  let component: MerchantPhotoComponent;
  let fixture: ComponentFixture<MerchantPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
