import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvnCheckComponent } from './bvn-check.component';

describe('BvnCheckComponent', () => {
  let component: BvnCheckComponent;
  let fixture: ComponentFixture<BvnCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BvnCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BvnCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
