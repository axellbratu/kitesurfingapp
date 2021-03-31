import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotstableComponent } from './spotstable.component';

describe('SpotstableComponent', () => {
  let component: SpotstableComponent;
  let fixture: ComponentFixture<SpotstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
