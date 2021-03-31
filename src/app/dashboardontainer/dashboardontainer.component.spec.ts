import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardontainerComponent } from './dashboardontainer.component';

describe('DashboardontainerComponent', () => {
  let component: DashboardontainerComponent;
  let fixture: ComponentFixture<DashboardontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
