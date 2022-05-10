import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCategoryAddComponent } from './live-category-add.component';

describe('LiveCategoryAddComponent', () => {
  let component: LiveCategoryAddComponent;
  let fixture: ComponentFixture<LiveCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
