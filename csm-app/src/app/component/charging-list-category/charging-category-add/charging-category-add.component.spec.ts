import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingCategoryAddComponent } from './charging-category-add.component';

describe('ChargingCategoryAddComponent', () => {
  let component: ChargingCategoryAddComponent;
  let fixture: ComponentFixture<ChargingCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
