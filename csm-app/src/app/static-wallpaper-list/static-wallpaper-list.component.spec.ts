import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticWallpaperListComponent } from './static-wallpaper-list.component';

describe('StaticWallpgerListComponent', () => {
  let component: StaticWallpaperListComponent;
  let fixture: ComponentFixture<StaticWallpaperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticWallpaperListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticWallpaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
