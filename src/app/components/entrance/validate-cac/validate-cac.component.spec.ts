import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCacComponent } from './validate-cac.component';

describe('ValidateCacComponent', () => {
  let component: ValidateCacComponent;
  let fixture: ComponentFixture<ValidateCacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateCacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
