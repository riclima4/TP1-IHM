import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestPointsPage } from './interest-points.page';

describe('InterestPointsPage', () => {
  let component: InterestPointsPage;
  let fixture: ComponentFixture<InterestPointsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
