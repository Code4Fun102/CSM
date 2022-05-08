import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWallpaperListComponent } from './live-wallpaper-list.component';

describe('LiveWallpaperListComponent', () => {
  let component: LiveWallpaperListComponent;
  let fixture: ComponentFixture<LiveWallpaperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveWallpaperListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWallpaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
