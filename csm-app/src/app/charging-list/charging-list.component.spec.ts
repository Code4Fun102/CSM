import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingListComponent } from './charging-list.component';

describe('ChargingListComponent', () => {
  let component: ChargingListComponent;
  let fixture: ComponentFixture<ChargingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
