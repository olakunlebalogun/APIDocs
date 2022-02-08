import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuthenticationPinComponent } from './update-authentication-pin.component';

describe('UpdateAuthenticationPinComponent', () => {
  let component: UpdateAuthenticationPinComponent;
  let fixture: ComponentFixture<UpdateAuthenticationPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAuthenticationPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAuthenticationPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
