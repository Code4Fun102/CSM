import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingCategoryEditComponent } from './charging-category-edit.component';

describe('ChargingCategoryEditComponent', () => {
  let component: ChargingCategoryEditComponent;
  let fixture: ComponentFixture<ChargingCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
