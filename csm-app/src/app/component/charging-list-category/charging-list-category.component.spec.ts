import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingListCategoryComponent } from './charging-list-category.component';

describe('ChargingListCategoryComponent', () => {
  let component: ChargingListCategoryComponent;
  let fixture: ComponentFixture<ChargingListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingListCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
