import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassChangesComponent } from './pass-changes.component';

describe('PassChangesComponent', () => {
  let component: PassChangesComponent;
  let fixture: ComponentFixture<PassChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
