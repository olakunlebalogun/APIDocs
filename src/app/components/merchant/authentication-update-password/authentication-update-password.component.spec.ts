import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUpdatePasswordComponent } from './authentication-update-password.component';

describe('AuthenticationUpdatePasswordComponent', () => {
  let component: AuthenticationUpdatePasswordComponent;
  let fixture: ComponentFixture<AuthenticationUpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationUpdatePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
