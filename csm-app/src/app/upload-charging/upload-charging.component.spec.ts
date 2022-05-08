import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadChargingComponent } from './upload-charging.component';

describe('UploadChargingComponent', () => {
  let component: UploadChargingComponent;
  let fixture: ComponentFixture<UploadChargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadChargingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
