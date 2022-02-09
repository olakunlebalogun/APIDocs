import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotographComponent } from './upload-photograph.component';

describe('UploadPhotographComponent', () => {
  let component: UploadPhotographComponent;
  let fixture: ComponentFixture<UploadPhotographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPhotographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPhotographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
