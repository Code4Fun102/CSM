import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEditComponent } from './live-edit.component';

describe('LiveEditComponent', () => {
  let component: LiveEditComponent;
  let fixture: ComponentFixture<LiveEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
