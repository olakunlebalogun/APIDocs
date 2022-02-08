import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvnVerifyComponent } from './bvn-verify.component';

describe('BvnVerifyComponent', () => {
  let component: BvnVerifyComponent;
  let fixture: ComponentFixture<BvnVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BvnVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BvnVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
