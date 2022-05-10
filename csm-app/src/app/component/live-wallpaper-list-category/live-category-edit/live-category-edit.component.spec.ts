import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCategoryEditComponent } from './live-category-edit.component';

describe('LiveCategoryEditComponent', () => {
  let component: LiveCategoryEditComponent;
  let fixture: ComponentFixture<LiveCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
