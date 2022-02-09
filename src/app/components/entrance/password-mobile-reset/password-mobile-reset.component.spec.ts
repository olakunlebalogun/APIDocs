import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMobileResetComponent } from './password-mobile-reset.component';

describe('PasswordMobileResetComponent', () => {
  let component: PasswordMobileResetComponent;
  let fixture: ComponentFixture<PasswordMobileResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordMobileResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMobileResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
