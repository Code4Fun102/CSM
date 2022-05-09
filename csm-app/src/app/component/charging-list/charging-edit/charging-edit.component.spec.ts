import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingEditComponent } from './charging-edit.component';

describe('ChargingEditComponent', () => {
  let component: ChargingEditComponent;
  let fixture: ComponentFixture<ChargingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
