import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePayoutComponent } from './delete-payout.component';

describe('DeletePayoutComponent', () => {
  let component: DeletePayoutComponent;
  let fixture: ComponentFixture<DeletePayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
