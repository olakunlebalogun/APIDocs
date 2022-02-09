import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationUpdatePinComponent } from './authentication-update-pin.component';

describe('AuthenticationUpdatePinComponent', () => {
  let component: AuthenticationUpdatePinComponent;
  let fixture: ComponentFixture<AuthenticationUpdatePinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationUpdatePinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationUpdatePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
