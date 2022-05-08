import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStaticComponent } from './upload-static.component';

describe('UploadStaticComponent', () => {
  let component: UploadStaticComponent;
  let fixture: ComponentFixture<UploadStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
