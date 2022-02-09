import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuthenticationPasswordComponent } from './update-authentication-password.component';

describe('UpdateAuthenticationPasswordComponent', () => {
  let component: UpdateAuthenticationPasswordComponent;
  let fixture: ComponentFixture<UpdateAuthenticationPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAuthenticationPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAuthenticationPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
