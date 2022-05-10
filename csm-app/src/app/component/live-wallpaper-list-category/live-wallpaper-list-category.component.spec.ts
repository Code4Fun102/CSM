import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWallpaperListCategoryComponent } from './live-wallpaper-list-category.component';

describe('LiveWallpaperListCategoryComponent', () => {
  let component: LiveWallpaperListCategoryComponent;
  let fixture: ComponentFixture<LiveWallpaperListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveWallpaperListCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWallpaperListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
